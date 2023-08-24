import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import styles from './styles';
import auth from '@react-native-firebase/auth';

const SignupScreen = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {route} = props;

  useEffect(() => {
    // PersistantHelper.setObject('mytestobject', {
    //   firstName: 'Firdous',
    //   lastName: 'Ali',
    // });
  }, []);

  return (
    <View>
      <TextInput
        value={username}
        onChangeText={changedText => {
          setUsername(changedText);
        }}
        placeholder="Enter Email"
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
          if (username && password) {
            auth()
              .createUserWithEmailAndPassword(username, password)
              .then(() => {
                console.log('User account created & signed in!');
              })
              .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                  console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                  console.log('That email address is invalid!');
                }

                console.error(error);
              });
          }
        }}>
        <Text style={styles.buttontext}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
