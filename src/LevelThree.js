import {Text, View} from 'react-native';
import {useMyContext} from './contexts/MyContext';

const LevelThree = props => {
  console.log('hey this is level three render');

  const {data, updateData} = useMyContext();

  return (
    <View style={{flex: 1, backgroundColor: 'red', margin: 5}}>
      <Text>{data.city}</Text>
    </View>
  );
};

export default LevelThree;
