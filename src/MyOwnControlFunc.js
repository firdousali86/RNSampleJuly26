import {useState} from 'react';
import {TextInput, View, Button, Alert, Text} from 'react-native';

const MyOwnControlFunc = props => {
  const {bgColor, children, initialDisplayName} = props;
  const [myTextValue, setMyTextValue] = useState(initialDisplayName);

  return (
    <View style={{backgroundColor: props.bgColor, marginTop: 10}}>
      <TextInput
        value={myTextValue}
        onChangeText={changedText => {
          setMyTextValue(changedText);
        }}
        style={{color: 'white', height: 44}}
      />
    </View>
  );
};

export default MyOwnControlFunc;
