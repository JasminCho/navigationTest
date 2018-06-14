import React, { Component } from "react";
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import styles from './styles';

class LoginField extends Component {
  render() {
    const { placeholder, keyboardType, focusBool, secureBool, value, handleValueUpdate } = this.props;
    return(
      <TextInput
        style={styles.input}
        underlineColorAndroid={'transparent'}
        autoCapitalize='none'
        autoCorrect={false}
        placeholderTextColor='#03a9f4'
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoFocus={focusBool}
        secureTextEntry={secureBool}
        value={value}
        onChangeText={handleValueUpdate}
      />
    );
  }
}

LoginField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  focusBool: PropTypes.bool,
  secureBool: PropTypes.bool,
  value: PropTypes.object,
  handleValueUpdate: PropTypes.func.isRequired,
};

export default LoginField;
