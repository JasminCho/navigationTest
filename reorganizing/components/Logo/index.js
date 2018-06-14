import React, { Component } from "react";
import { View, Image, Text } from 'react-native';

import styles from './styles';

var logo = require('../../assets/images/daikin-comfort-logo-crop-u1511.png');

class Logo extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Image source={logo} />
        <Text style={styles.text}>smart thermostat</Text>
      </View>
    );
  }
}

export default Logo;
