/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, LoginScreen} from './containers';
import UserProfile from './UserProfile';
import PersistantHelper from './helpers/PersistantHelper';
import {EventRegister} from 'react-native-event-listeners';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const getUserName = async () => {
    const username = await PersistantHelper.getValue('username');

    setIsUserLoggedIn(username ? true : false);
  };

  useEffect(() => {
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
      </Stack.Group>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isUserLoggedIn ? getMainStack() : getAuthStack()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
