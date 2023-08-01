/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Text,
  View,
  TextInput,
} from 'react-native';
import MyOwnControl from './MyOwnControl';
import MyOwnControlFunc from './MyOwnControlFunc';
import UserProfile from './UserProfile';

import LevelOne from './LevelOne';

function App(): JSX.Element {
  // const onTextInputValueChanged = changedText => {
  //   console.log(
  //     'this is a proof that we can pass functions using props from parent' +
  //       changedText,
  //   );
  // };

  const [textValue, setTextValue] = useState('');

  console.log('hey this is app render');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'pink',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
      }}>
      <TextInput
        value={textValue}
        onChangeText={changedText => {
          setTextValue(changedText);
        }}
        placeholder={'textinput'}
        style={{
          backgroundColor: 'white',
          height: 44,
          marginHorizontal: 30,
          alignSelf: 'stretch',
        }}
      />
      <LevelOne />
      <LevelOne />

      {/* <MyOwnControl bgColor={'red'} initialDisplayName="Awais Iqbal">
        <Text>Hey! This text is embedded inside myowncontrol</Text>
      </MyOwnControl>
      <MyOwnControlFunc bgColor={'blue'} initialDisplayName="Awais Iqbal">
        <Text>Hey! This text is embedded inside myowncontrolfunc</Text>
      </MyOwnControlFunc> */}
      {/* <ImageBackground
        source={{
          uri: 'https://www.thedrive.com/uploads/2022/04/24/NGAD-F22.jpg?auto=webp&crop=16%3A9&auto=webp&optimize=high&quality=70&width=1440',
        }}>
        <ScrollView>
          <UserProfile />
        </ScrollView>
      </ImageBackground> */}
    </SafeAreaView>
  );
}

export default App;
