# Pokemon App
A simple mobile app that fetches a list of pokemons from a public API, handles notifications and navaigation


<p align="center">

![screen](https://github.com/Rolando-Barbella/poke-app/blob/main/assets/images/client.svg)
  <img src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg" alt="Firebase" width="60"/>
  <img src="https://reactnative.dev/img/header_logo.svg" alt="React Native" width="60"/>
</p>


## How to run the app

```bash
npm i
```

```bash
npm start
```

```bash
i - run on iOS
a - run on Android
```

## Push Notifications

For the notifications to work, you might need to create a new app in your [firebase console](https://console.firebase.google.com/) with the name of **pokeapp**, download the **google-services.json** file, add it to the ``android/app`` folder.

Once you are ready to send a notification, on the **5 Additional options (optional)** section, add a couple of custom data fields, example:

```
name: caterpie
url: https://pokeapi.co/api/v2/pokemon?limit=10&offset=0
```

Otherwise, some random notifications has been scheduled from the next 3 days (17/11 - 20/11) that should appear without doing extra setups ( create firebase app, etc)

## TODO
A couple of thing I will have done better with a bit more time:

- The notifications are display with a simple Alert, ideally a library that offers "more control" could be use

- The notifications when the app is in the background are displayed, however when you press on it, it is not passing the custom field values to the new screen

- There is secrete key expose in the google-service, in a production appp this needs to be handle differently

- The app was mostly tested on Android, it should work fine on IOS tough


