import React, { Component } from "react";
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

class StartScreenButton extends Component {
  render() {
    const { text, handleClick, buttonColor, textColor } = this.props;
    return(
      <TouchableOpacity style={[styles.button,{backgroundColor:buttonColor}]} onPress={() => handleClick()}>
        <Text style={[styles.text,{color:textColor}]}> {text} </Text>
      </TouchableOpacity>
    );
  }
}

StartScreenButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  buttonColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default StartScreenButton;
