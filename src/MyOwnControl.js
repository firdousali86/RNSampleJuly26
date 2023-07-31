import React from 'react';
import {TextInput, View, Button, Text} from 'react-native';

class MyOwnControl extends React.Component {
  state = {
    myTextValue: 'Firdous Ali',
    pressCount: 0,
  };

  headerView = () => {
    const {bgColor} = this.props;

    return (
      <View style={{backgroundColor: bgColor, marginTop: 10}}>
        <TextInput
          value={this.state.myTextValue}
          onChangeText={changedText => {
            this.setState({myTextValue: changedText});
          }}
        />

        <Text>Button press count: {this.state.pressCount}</Text>
      </View>
    );
  };

  footerView = () => {
    return (
      <Button
        onPress={() => {
          console.log("hey you pressed a class component's button");

          this.setState({pressCount: this.state.pressCount + 1});
        }}
        title="Press"
      />
    );
  };

  render() {
    return (
      <View>
        {this.headerView()}
        {this.footerView()}
      </View>
    );
  }
}

export default MyOwnControl;
