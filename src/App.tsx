/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import analytics from '@react-native-firebase/analytics';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  HomeScreen,
  LoginScreen,
  ListScreen,
  CartScreen,
  MapScreen,
} from './containers';
import UserProfile from './UserProfile';
import PersistantHelper from './helpers/PersistantHelper';
import {EventRegister} from 'react-native-event-listeners';
import {Provider} from 'react-redux';
import store from './store';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const getUserName = async () => {
    const username = await PersistantHelper.getValue('username');

    setIsUserLoggedIn(username ? true : false);
  };

  useEffect(() => {
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
      </Stack.Group>
    );
  };

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{title: 'List'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />

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
