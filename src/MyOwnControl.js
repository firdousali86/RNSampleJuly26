import React from 'react';
import {TextInput, View, Button, Text} from 'react-native';

class MyOwnControl extends React.Component {
  constructor(props) {
    super(props);

    const {initialDisplayName} = props;

    this.state = {
      myTextValue: initialDisplayName,
      pressCount: 0,
    };
  }

  render() {
    return (
      <View style={{backgroundColor: this.props.bgColor, marginTop: 10}}>
        <TextInput
          value={this.state.myTextValue}
          onChangeText={changedText => {
            this.setState({myTextValue: changedText});

            this.somevar = {c: 'd'};
          }}
          style={{height: 44}}
        />
      </View>
    );
  }
}

export default MyOwnControl;
