import {useEffect, useState} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import CommonTextInput from './CommonTextInput';
import CommonFormButton from './CommonFormButton';
import PersistantHelper from './helpers/PersistantHelper';

const UserProfile = () => {
  const [fetchedValue, setFetchedValue] = useState('');

  useEffect(async () => {
    const fetchedText = await PersistantHelper.getValue('myTextInput');

    if (fetchedText) {
      setFetchedValue(fetchedText);
    }
  }, []);

  const submitHandler = () => {
    console.log('onpress called from userprofile');
  };

  return (
    <View>
      <CommonTextInput placeholder="First Name" />
      <CommonTextInput placeholder="Last Name" />
      <CommonTextInput placeholder="Age" />
      <CommonTextInput placeholder="City" />
      <CommonTextInput placeholder="Country" />

      <CommonFormButton
        buttonText="Submit Button"
        onPress={submitHandler}
        style={{
          marginVertical: 8,
          height: 44,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <Text>{fetchedValue}</Text>
    </View>
  );
};

export default UserProfile;
