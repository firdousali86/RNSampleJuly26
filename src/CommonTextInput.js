import {TextInput} from 'react-native';

const CommonTextInput = props => {
  //   const {placeholder} = props;

  return (
    <TextInput
      value={''}
      placeholder={props.placeholder}
      style={{
        marginVertical: 8,
        backgroundColor: 'green',
        height: 44,
      }}
    />
  );
};

export default CommonTextInput;
