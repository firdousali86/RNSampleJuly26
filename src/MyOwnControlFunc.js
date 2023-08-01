import {TextInput, View, Button, Alert, Text} from 'react-native';

const MyOwnControlFunc = props => {
  const {bgColor, children} = props;

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

  const renderAuthorizedView = () => {
    return <Text>this is authorized view</Text>;
  };

  const renderUnAuthorizedView = () => {
    return <Text>this is un authorized view</Text>;
  };

  return (
    <View>
      {headerView()}

      {bgColor == 'blue' ? children : null}

      {bgColor == 'yellow' ? renderAuthorizedView() : renderUnAuthorizedView()}
      {footerView()}
    </View>
  );
};

export default MyOwnControlFunc;
