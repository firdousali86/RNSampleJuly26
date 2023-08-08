import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from 'react-native';
import TestLifecycleFunct from '../TestLifecycleFunct';
import Modal from 'react-native-modal';
import LevelOne from '../../LevelOne';
import {MyContextProvider} from '../../contexts/MyContext';

const HomeScreen = props => {
  // console.log('home > render');

  const [textinput, settextinput] = useState('');
  const [textinput2, settextinput2] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTextValue, setModalTextValue] = useState('');
  const [textValue, setTextValue] = useState('');

  React.useEffect(() => {
    if (props.route.params) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server

      console.log(props.route.params);
    }
  }, [props.route.params]);

  const renderModal = () => {
    return (
      <Modal
        isVisible={isModalVisible}
        hasBackdrop
        style={{height: 250}}
        onBackdropPress={() => {
          console.log('sdfsdf');
        }}>
        <View style={{flex: 1}}>
          <Text>Hello!</Text>
          <TextInput
            value={modalTextValue}
            onChangeText={changedText => {
              setModalTextValue(changedText);
            }}
            style={{backgroundColor: 'white', height: 44, margin: 5}}
          />

          <TouchableOpacity
            onPress={() => {
              setCityValues([...cityValues, {name: modalTextValue}]);
              setModalTextValue('');

              setIsModalVisible(false);
            }}
            style={{
              height: 44,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'pink',
        flexDirection: 'column',
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: 'yellow',
          margin: 10,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          setIsModalVisible(true);
        }}>
        <Text>Show Modal</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'yellow',
          margin: 10,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          props.navigation.navigate('Login');
        }}>
        <Text>Navigate to login</Text>
      </TouchableOpacity>

      <TextInput
        style={{backgroundColor: 'white', marginVertical: 20, height: 40}}
        value={textinput}
        onChangeText={changedText => {
          settextinput(changedText);
        }}
      />

      <TextInput
        style={{backgroundColor: 'white', marginVertical: 20, height: 40}}
        value={textinput2}
        onChangeText={changedText => {
          settextinput2(changedText);
        }}
      />

      <MyContextProvider value={textinput2}>
        <LevelOne />
      </MyContextProvider>

      {renderModal()}
    </SafeAreaView>
  );
};

export default HomeScreen;
