/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import HomeScreen from './containers/HomeScreen';
// import LoginScreen from './containers/LoginScreen';

import {HomeScreen, LoginScreen} from './containers';

const Stack = createNativeStackNavigator();

// const cityData = [
//   {name: 'London'},
//   {name: 'NY'},
//   {name: 'Delhi'},
//   {name: 'Sydney'},
//   {name: 'Melbourne'},
//   {name: 'Cairo'},
//   {name: 'Istanbul'},
//   {name: 'Karachi'},
// ];

function App(): JSX.Element {
  // const onTextInputValueChanged = changedText => {
  //   console.log(
  //     'this is a proof that we can pass functions using props from parent' +
  //       changedText,
  //   );
  // };

  // const [cityValues, setCityValues] = useState(cityData);

  // const renderFlatList = () => {
  //   return (
  //     <FlatList
  //       style={{margin: 10}}
  //       data={cityValues}
  //       renderItem={({item, index}) => {
  //         return (
  //           <View
  //             style={{
  //               backgroundColor: 'white',
  //               height: 50,
  //               borderBottomColor: 'black',
  //               borderBottomWidth: 0.5,
  //               justifyContent: 'center',
  //               margin: 5,
  //             }}>
  //             <Text style={{marginHorizontal: 10}}>{item.name}</Text>
  //           </View>
  //         );
  //       }}
  //     />
  //   );
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
