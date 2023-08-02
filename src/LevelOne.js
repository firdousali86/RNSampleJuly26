import {View} from 'react-native';
import LevelTwo from './LevelTwo';
import React from 'react';
import PropTypes from 'prop-types';

class LevelOne extends React.PureComponent {
  render() {
    const {bgColor} = this.props;

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
        <LevelTwo />
        <LevelTwo />
        <LevelTwo />
      </View>
    );
  }
}

export default LevelOne;

LevelOne.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

LevelOne.defaultProps = {
  bgColor: 'yellow',
};
