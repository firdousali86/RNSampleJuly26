import {View} from 'react-native';
import LevelThree from './LevelThree';

const LevelTwo = props => {
  console.log('hey this is level two render');

  return (
    <View style={{flex: 1, backgroundColor: 'blue', margin: 5}}>
      <LevelThree />
    </View>
  );
};

export default LevelTwo;
