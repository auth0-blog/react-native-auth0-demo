import {useAuth0, Auth0Provider} from 'react-native-auth0';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import Constants from 'expo-constants';

const customScheme = 'auth0-rn-demo';

const Home = () => {
  const {authorize, clearSession, user, error, getCredentials} = useAuth0();

  const onLogin = async () => {
    try {
      await authorize({
        scope: 'openid profile email',
        audience: Constants.expoConfig.extra.auth0Audience
      }, {
        customScheme: customScheme
      });
    } catch (e) {
      throw Error('There was an issue authenticating the user. Please try again.');
    }
  };

  const loggedIn = user !== undefined && user !== null;

  const onLogout = async () => {
    try {
      await clearSession({customScheme: customScheme});
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  const onCallAPI = async () => {
    const accessToken = (await getCredentials()).accessToken;
    const apiResponse = await fetch(`${Constants.expoConfig.extra.apiURL}/api/messages/protected`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    Alert.alert(await apiResponse.text());
  }

  return (
      <View style={styles.container}>
        <Text style={styles.header}> Auth0 React Native - Login </Text>
        {user && <Text>You are logged in as {user.name}</Text>}
        {!user && <Text>You are not logged in</Text>}
        {error && <Text>{error.message}</Text>}

        {user && <Button title="Call API" onPress={onCallAPI} />}

        <Button
            onPress={loggedIn ? onLogout : onLogin}
            title={loggedIn ? 'Log Out' : 'Log In'}
        />
      </View>
  );
};

export default function App() {
  return (
    <Auth0Provider domain={Constants.expoConfig.extra.auth0Domain} clientId={Constants.expoConfig.extra.auth0ClientId}>
      <Home />
    </Auth0Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
