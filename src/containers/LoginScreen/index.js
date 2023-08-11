import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import styles from './styles';
import PersistantHelper from '../../helpers/PersistantHelper';
import {EventRegister} from 'react-native-event-listeners';

const LoginScreen = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {route} = props;

  useEffect(() => {
    PersistantHelper.setObject('mytestobject', {
      firstName: 'Firdous',
      lastName: 'Ali',
    });
  }, []);

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
          PersistantHelper.setValue('username', username);

          EventRegister.emit('userLoggedIn', {username});
        }}>
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
