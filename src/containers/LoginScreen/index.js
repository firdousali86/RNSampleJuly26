import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import styles from './styles';
import PersistantHelper from '../../helpers/PersistantHelper';
import {EventRegister} from 'react-native-event-listeners';
// import auth from '@react-native-firebase/auth';
import Config from 'react-native-config';

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
          // PersistantHelper.setValue('username', username);
          // EventRegister.emit('userLoggedIn', {username});
          // auth()
          //   .signInWithEmailAndPassword(username, password)
          //   .then(response => {
          //     auth()
          //       .user.getIdToken()
          //       .then(token => {
          //         console.log(token);
          //       });
          //     // console.log('User account created & signed in!');
          //     console.log(response);
          //   })
          //   .catch(error => {
          //     if (error.code === 'auth/email-already-in-use') {
          //       console.log('That email address is already in use!');
          //     }
          //     if (error.code === 'auth/invalid-email') {
          //       console.log('That email address is invalid!');
          //     }
          //     console.error(error);
          //   });
        }}>
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
      <Text>{Config.ENV}</Text>
    </View>
  );
};

export default LoginScreen;
