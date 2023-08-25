/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import analytics from '@react-native-firebase/analytics';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  HomeScreen,
  LoginScreen,
  ListScreen,
  CartScreen,
  MapScreen,
  SignupScreen,
  FirestoreScreen,
} from './containers';
import UserProfile from './UserProfile';
import {PersistantHelper, NotificationHelper} from './helpers';
import {EventRegister} from 'react-native-event-listeners';
import {Provider} from 'react-redux';
import store from './store';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const navigation = useNavigation();

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const getUserName = async () => {
    const username = await PersistantHelper.getValue('username');

    setIsUserLoggedIn(username ? true : false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userObject => {
      console.log(userObject);
    });

    return subscriber;
  }, []);

  useEffect(() => {
    NotificationHelper.initializeFCM(
      recievedMessage => {
        if (recievedMessage.type === 'orderBooked') {
          //call order api
        }

        if (recievedMessage.type === 'newemail') {
          //call inbox api
        }
      },
      tappedMessage => {
        if (tappedMessage.type === 'news') {
          //navigate to so n so views with data
          // navigation.navigate('somescreenname');
        }
      },
    );
    NotificationHelper.checkFCMPermission();
    NotificationHelper.getToken();
    NotificationHelper.refreshToken();

    analytics().logEvent('testrun', {
      name: 'firdous ali',
    });

    getUserName();

    let event = EventRegister.addEventListener('userLoggedIn', data => {
      setIsUserLoggedIn(data.username ? true : false);
    });

    return () => {
      EventRegister.removeEventListener(event);
    };
  }, []);

  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Group>
    );
  };

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="Firestore"
          component={FirestoreScreen}
          options={{title: 'FirestoreScreen'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{title: 'List'}}
        />
        <Stack.Screen name="MapScreen" component={MapScreen} />

        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{title: 'Overview'}}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{title: 'Cart'}}
        />
      </Stack.Group>
    );
  };

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>{getMainStack()}</Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
