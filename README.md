# Pokemon App
A simple mobile app that fetches a list of pokemons from a public API, handles notifications and navaigation


<p align="center">
<svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.069 10.075a2.273 2.273 0 00-.887-.74 2.296 2.296 0 00-2.237.16 2.265 2.265 0 00-.77.859 2.016 2.016 0 00.392 2.274 3.342 3.342 0 002.23-.63 3.289 3.289 0 001.271-1.923zM15.3 1.3l-1.45-.788-6.31 3.481.503.27.957.498 1.732-.954 4.569-2.523-.001.016zm.584-.24a.225.225 0 01.16.15l2.114 6.182a.205.205 0 01-.1.269 4.063 4.063 0 00-1.798 1.974 4.017 4.017 0 00-.175 2.655 4.283 4.283 0 001.755 2.332c.842.55 1.852.79 2.854.68a.269.269 0 01.262.16l2.184 6.345a.256.256 0 01-.101.278l-6.712 3.89a.253.253 0 01-.101.02.27.27 0 01-.181-.03L13.69 24.5a.234.234 0 01-.1-.1l-4.6-10.483-7.005 3.95a.327.327 0 01-.272.01l-1.592-.898a.23.23 0 01-.1-.299l6.805-12.8a.243.243 0 01.11-.099L13.721.03a.259.259 0 01.241 0l1.923 1.03zM7.47 4.499L7.14 4.33.58 16.71l1.197.668 5.657-7.335a.275.275 0 01.231-.1.282.282 0 01.201.149l6.16 14.066 1.646 1.007L9.06 6.005l-.281-.798-1.318-.718.01.01zm10.145 7.382a2.51 2.51 0 01.12-1.663 2.54 2.54 0 011.138-1.23 2.798 2.798 0 013.261.4 2.513 2.513 0 01.073 3.568l-.073.073a2.77 2.77 0 01-3.788.01 2.719 2.719 0 01-.731-1.158z" fill="#000"/></svg>

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


