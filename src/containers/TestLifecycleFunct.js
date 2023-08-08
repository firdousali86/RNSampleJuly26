import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const TestLifecycleFunct = props => {
  const [myinputtext, setmyinputtext] = useState(props.inputValue);

  //componentdidmount
  useEffect(() => {
    console.log('componentdidmount > lifecycle');

    return () => {
      console.log('componentwillunmount > lifecycle');
    };
  }, []);

  //componentdidupdate
  useEffect(() => {
    console.log('componentdidupdate > lifecycle');
    setmyinputtext(props.inputValue);
  }, [props.inputValue]);

  //this one gets called on every state change of myinputtext
  useEffect(() => {
    console.log('state is also changing');
  }, [myinputtext]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Recieving following text from outside</Text>
      <Text>{myinputtext}</Text>
    </View>
  );
};

export default TestLifecycleFunct;
