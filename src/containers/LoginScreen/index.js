import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const LoginScreen = props => {
  const {route} = props;

  return (
    <View>
      <Text>this is a login screen</Text>

      <Text>Username is: {route?.params?.username}</Text>
      <Text>Email is: {route?.params?.email}</Text>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Home');
        }}>
        <Text>nav to login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.push('Login');
        }}>
        <Text>push login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}>
        <Text>goback</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.popToTop();
        }}>
        <Text>pop to top</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
