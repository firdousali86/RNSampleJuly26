import {memo, useMemo, useState} from 'react';
import {View, TouchableOpacity, TextInput, Text} from 'react-native';
import LevelTwo from './LevelTwo';
import React from 'react';
import PropTypes from 'prop-types';

const LevelOne = props => {
  const [textvalue, settextvalue] = useState('');
  const [anothertextvalue, setanothertextvalue] = useState('');
  const {bgColor} = props;

  console.log('hey this is level one render');

  const convertToFahrenheit = celcius => {
    console.log('our calculation was invoked!!');

    return celcius * (9 / 5) + 32;
  };

  const calculatedValue = useMemo(() => {
    return convertToFahrenheit(textvalue);
  }, [textvalue]);

  return (
    <View
      style={{
        width: 120,
        height: 180,
        backgroundColor: bgColor,
        margin: 5,
        flexDirection: 'column',
      }}>
      <TextInput
        style={{backgroundColor: 'yellow'}}
        value={anothertextvalue}
        onChangeText={changedText => {
          setanothertextvalue(changedText);
        }}
      />
      <TextInput
        style={{backgroundColor: 'orange'}}
        value={textvalue}
        onChangeText={changedText => {
          settextvalue(changedText);
        }}
      />
      <Text>{calculatedValue}</Text>
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => {
          props.onTapped();
        }}>
        <LevelTwo city={props.city} />
        <LevelTwo city={props.city} />
        <LevelTwo city={props.city} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(LevelOne);

LevelOne.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

LevelOne.defaultProps = {
  bgColor: 'yellow',
};

// class LevelOne extends React.Component {
//   render() {
//     const {bgColor} = this.props;

//     console.log('hey this is level one render');

//     return (
//       <View
//         style={{
//           width: 120,
//           height: 180,
//           backgroundColor: bgColor,
//           margin: 5,
//           flexDirection: 'column',
//         }}>
//         <LevelTwo city={this.props.city} />
//         <LevelTwo city={this.props.city} />
//         <LevelTwo city={this.props.city} />
//       </View>
//     );
//   }
// }
