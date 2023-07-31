import {TouchableOpacity, Text} from 'react-native';

const CommonFormButton = props => {
  const {buttonText, ...rest} = props;

  return (
    <TouchableOpacity {...rest}>
      <Text style={{color: 'white'}}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CommonFormButton;
