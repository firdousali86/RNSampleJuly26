import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import CommonTextInput from './CommonTextInput';
import CommonFormButton from './CommonFormButton';

const UserProfile = () => {
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
    </View>
  );
};

export default UserProfile;
