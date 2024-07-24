# [Clubembers](https://creativetimofficial.github.io/argon-react-native/docs/#)


Clubembers React Native is a fully coded app built over [Galio.io](https://galio.io/?ref=creativetim), [React Native](https://facebook.github.io/react-native/?ref=creativetim) and [Expo](https://expo.io/?ref=creativetim) to allow you to create powerful and beautiful e-commerce mobile applications. We have redesigned all the usual components in Galio to make it look like Argon's Design System, minimalistic and easy to use.

## Quick start
- Try it out on Expo (Simulator for iOS or even your physical device if you have an Android)

## Documentation
The documentation for the Argon React Native is hosted at our [website](https://demos.creative-tim.com/argon-react-native/docs/).

## Expo utils

Start by installing the expo-updates library in your project. Run the following command:
```
npx expo install expo-updates
```
You need to configure your project to use EAS Update. Run the following commands in the order they are specified:
```
eas update:configure
eas build:configure
```
After running these commands, the eas.json file be modified in the root directory of your project. Inside it, you'll find that a channel property is added to the development, preview and production build profiles.
```
{
  "build": {
    "development": {
      "channel": "development"
    },
    "preview": {
      "channel": "preview"
    },
    "production": {
      "channel": "production"
    }
  }
}
```
To publish an update to the build, run the following command:
```
eas update --branch dev --message "Updating app"
```

## OS Support

At present, we officially aim to support the last two versions of the following operating systems:

[<img src="https://raw.githubusercontent.com/creativetimofficial/ct-material-kit-pro-react-native/master/assets/android-logo.png" width="60" height="60" />](https://www.creative-tim.com/product/material-kit-pro-react-native)[<img src="https://raw.githubusercontent.com/creativetimofficial/ct-material-kit-pro-react-native/master/assets/apple-logo.png" width="60" height="60" />](https://www.creative-tim.com/product/material-kit-pro-react-native)


