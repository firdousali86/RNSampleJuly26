import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import styles from './styles';
import PersistantHelper from '../../helpers/PersistantHelper';

const LoginScreen = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {route, setIsUserLoggedIn} = props;

  return (
    <View>
      <TextInput
        value={username}
        onChangeText={changedText => {
          setUsername(changedText);
        }}
        placeholder="Enter Username"
        style={styles.textinput}
      />
      <TextInput
        value={password}
        onChangeText={changedText => {
          setPassword(changedText);
        }}
        placeholder="Enter Password"
        style={styles.textinput}
      />

      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
          setIsUserLoggedIn(true);
          // PersistantHelper.setValue('username', username);
        }}>
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
