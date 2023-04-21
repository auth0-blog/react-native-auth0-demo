This repository contains a basic React Native Expo application integrated with Auth0 to authenticate users and call a protected API endpoint.

Check out the article "[Call Protected APIs from a React Native Mobile Application](https://auth0.com/blog/call-protected-apis-from-a-react-native-mobile-application)"

## Note

This application uses the `react-native-auth0` SDK which is not compatible with "Expo Go" app. It is compatible only with Custom Dev Client and EAS builds.

## To run this application

1. Install all dependencies with `npm install`

2. Copy the `.env.example` file to `.env` and complete the values for `AUTH0_DOMAIN`, `AUTH0_CLIENT_ID`, and `AUTH0_AUDIENCE` from your Auth0 settings. (See [Register with Auth0](https://auth0.com/blog/call-protected-apis-from-a-react-native-mobile-application) for more details)

3. Set up an API using the stack of your choice following one of our [API guides](https://developer.auth0.com/resources/guides/api)

4. Set the environment variable `API_URL` to match the root URL of your API

5. Run the mobile application in your favorite mobile platform:

    ```shell
    # iOS target platform
    npm run ios
   
    # Android target platform
    npm run android
    ```
