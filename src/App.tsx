/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import analytics from '@react-native-firebase/analytics';
import {NavigationContainer} from '@react-navigation/native';

import {PersistantHelper, NotificationHelper} from './helpers';
import {EventRegister} from 'react-native-event-listeners';

import auth from '@react-native-firebase/auth';
import Navigate from './navigate';

function App(): JSX.Element {
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

  return (
    <NavigationContainer>
      <Navigate />
    </NavigationContainer>
  );
}

export default App;
