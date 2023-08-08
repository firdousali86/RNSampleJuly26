import {Text, View, TouchableOpacity} from 'react-native';
import {useMyContext} from './contexts/MyContext';

const LevelThree = props => {
  console.log('hey this is level three render');

  const {data, updateData} = useMyContext();

  return (
    <View style={{flex: 1, backgroundColor: 'red', margin: 5}}>
      <Text>{data.city}</Text>
      <TouchableOpacity
        onPress={() => {
          updateData({city: 'New York'});
        }}>
        <Text>Tap to change city</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LevelThree;
