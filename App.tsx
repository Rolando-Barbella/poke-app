import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { navigationRef, navigate } from './utils/navigationRef';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

// Request user permission for notifications
async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    } else {
      console.log('User denied notification permissions');
    }
}

export default function App() {
  React.useEffect(() => {
    requestUserPermission();
    // Foreground notification handler
    const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
      const { notification, data } = remoteMessage;

      if (notification) {
        Alert.alert(
          notification.title ?? 'Notification',
          notification.body ?? 'You have a new message',
          [
            {
              text: 'View Details',
              onPress: () => {
                navigate('Details', { pokemon: data})
              },
            },
          ],
        );
      }
    });

    // Handle notifications if the app is opened from a quit state
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Notification caused app to open from quit state:', remoteMessage);
          // Navigate to Details screen on open from quit state
          navigate('Details', { pokemon: remoteMessage });
        }
      });

    return unsubscribeOnMessage;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}