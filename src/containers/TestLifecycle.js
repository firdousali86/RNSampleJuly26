import React from 'react';
import {Text, View} from 'react-native';
import _ from 'lodash';

class TestLifecycle extends React.PureComponent {
  constructor(props) {
    super(props);

    console.log('constructor > lifecycle');

    this.state = {myinputtext: props.inputValue};
  }

  componentDidMount() {
    console.log('componentdidmount > lifecycle');
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log('shouldcomponentupdate > lifecycle');

  //     // return true;
  //     return !_.isEqual(nextProps, this.props);
  //     // return true;
  //   }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps > lifecycle');

    return {myinputtext: props.inputValue};
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentdidupdate > lifecycle');

    // console.log(prevProps);
    // console.log(this.props);

    // this.setState({myinputtext: this.props.inputValue});
  }

  componentWillUnmount() {
    console.log('componentwillunmount > lifecycle');
  }

  render() {
    console.log('render > lifecycle');

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Recieving following text from outside</Text>
        <Text>{this.state.myinputtext}</Text>
      </View>
    );
  }
}

export default TestLifecycle;
