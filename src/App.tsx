/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, ImageBackground, Text} from 'react-native';
import MyOwnControl from './MyOwnControl';
import MyOwnControlFunc from './MyOwnControlFunc';
import UserProfile from './UserProfile';

function App(): JSX.Element {
  const onTextInputValueChanged = changedText => {
    console.log(
      'this is a proof that we can pass functions using props from parent' +
        changedText,
    );
  };

  return (
    <SafeAreaView style={{}}>
      <MyOwnControl bgColor={'red'}>
        <Text>Hey! This text is embedded inside myowncontrol</Text>
      </MyOwnControl>
      <MyOwnControlFunc bgColor={'blue'}>
        <Text>Hey! This text is embedded inside myowncontrolfunc</Text>
      </MyOwnControlFunc>
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
