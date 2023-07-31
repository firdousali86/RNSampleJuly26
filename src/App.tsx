/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, ImageBackground} from 'react-native';
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
      <MyOwnControl bgColor={'red'} />
      <MyOwnControlFunc bgColor={'blue'} />
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
