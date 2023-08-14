import {memo} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useMyContext} from './contexts/MyContext';
import {useSelector} from 'react-redux';

const LevelThree = props => {
  const count = useSelector(state => state.counter.value);

  console.log('hey this is level three render');

  // const {data, updateData} = useMyContext();

  return (
    <View style={{flex: 1, backgroundColor: 'red', margin: 5}}>
      <Text>{props.data?.city}</Text>
      <Text>{count}</Text>
    </View>
  );
};

export default memo(LevelThree);
