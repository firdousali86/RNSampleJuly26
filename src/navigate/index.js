import {useEffect} from 'react';
import {} from 'react-native';
import {Provider} from 'react-redux';
import store from '../store';
import {NotificationHelper} from '../helpers';
import {
  HomeScreen,
  LoginScreen,
  ListScreen,
  CartScreen,
  MapScreen,
  SignupScreen,
  FirestoreScreen,
  PubNubScreen,
} from '../containers';
import UserProfile from '../UserProfile';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const navigation = useNavigation();

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
        navigation.navigate('Home');
      },
    );
    NotificationHelper.checkFCMPermission();
    NotificationHelper.getToken();
    NotificationHelper.refreshToken();
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
          name="PubNub"
          component={PubNubScreen}
          options={{title: 'PubNubScreen'}}
        />
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
    <Provider store={store}>
      <Stack.Navigator>{getMainStack()}</Stack.Navigator>
    </Provider>
  );
};

export default Navigation;
