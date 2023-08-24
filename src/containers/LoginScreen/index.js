import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import styles from './styles';
import PersistantHelper from '../../helpers/PersistantHelper';
import {EventRegister} from 'react-native-event-listeners';
import auth from '@react-native-firebase/auth';

const LoginScreen = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {route} = props;

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
          // PersistantHelper.setValue('username', username);
          // EventRegister.emit('userLoggedIn', {username});

          auth()
            .signInWithEmailAndPassword(username, password)
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
        }}>
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          auth()
            .signOut()
            .then(() => {
              console.log('User signed out!');
            })
            .catch(error => {
              console.log('error');
            });
        }}>
        <Text>logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
