import {View} from 'react-native';
import LevelTwo from './LevelTwo';

const LevelOne = () => {
  console.log('hey this is level one render');

  return (
    <View
      style={{
        width: 120,
        height: 120,
        backgroundColor: 'yellow',
        margin: 5,
        flexDirection: 'column',
      }}>
      <LevelTwo />
      <LevelTwo />
      <LevelTwo />
    </View>
  );
};

export default LevelOne;
