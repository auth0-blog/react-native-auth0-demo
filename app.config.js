import 'dotenv/config';

export default {
  "expo": {
    "name": "react-native-auth0-demo",
    "slug": "react-native-auth0-demo",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "extra": {
      "auth0Domain": process.env.AUTH0_DOMAIN,
      "auth0ClientId": process.env.AUTH0_CLIENT_ID,
      "auth0Audience": process.env.AUTH0_AUDIENCE,
      "apiURL": process.env.API_URL,
    },
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.auth0.rndemo"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.auth0.rndemo"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      [
        "react-native-auth0",
        {
          "domain": "dev-bajcmartinez.eu.auth0.com",
          "customScheme": "auth0-rn-demo"
        }
      ]
    ]
  }
};
