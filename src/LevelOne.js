import {View} from 'react-native';
import LevelTwo from './LevelTwo';
import React from 'react';
import PropTypes from 'prop-types';

const LevelOne = props => {
  const {bgColor} = props;

  console.log('hey this is level one render');

  return (
    <View
      style={{
        width: 120,
        height: 180,
        backgroundColor: bgColor,
        margin: 5,
        flexDirection: 'column',
      }}>
      <LevelTwo city={props.city} />
      <LevelTwo city={props.city} />
      <LevelTwo city={props.city} />
    </View>
  );
};

export default LevelOne;

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
