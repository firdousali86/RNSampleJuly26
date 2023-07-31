import {TextInput, View, Button, Alert} from 'react-native';

const MyOwnControlFunc = props => {
  const {bgColor} = props;

  const headerView = () => {
    return (
      <View style={{backgroundColor: bgColor, marginTop: 10}}>
        <TextInput value={''} />
      </View>
    );
  };

  const footerView = () => {
    return (
      <Button
        onPress={() => {
          console.log("hey you pressed a functional component's button");
        }}
        title="Press"
      />
    );
  };

  return (
    <View>
      {headerView()}
      {footerView()}
    </View>
  );
};

export default MyOwnControlFunc;
