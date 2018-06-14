import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, ImageBackground, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

import MessageFooter from '../Components/MessageFooter';

export default class AdjustThermostatScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'THERMOSTAT LOCATION',
      headerStyle: {
        backgroundColor: 'black',
        height: 30,
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 26,
      },
    }
  };
  //TODO: Different thermostat settings page state
  state = {
    primary: false,
    adjust: true,
    schedule: false,
    away: false,
    status: false,
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={{color:'white'}}>
          ADJUST PAGE
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 30,
    paddingTop: 30,
  },
  inputBox : {
    paddingVertical: 5,
    paddingLeft: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  description: {
    color: '#bdbdbd',
    // fontSize: 18,
    marginBottom: 10,
  },
  step: {
    flexDirection: 'row',
    borderTopWidth: 2.5,
    borderColor: '#bdbdbd',
    paddingVertical: 5,
    alignItems: 'center',
  },
  stepText: {
    color: '#bdbdbd',
    flex: 1,
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
  },
  footerButton: {
    flex: 1,
    borderTopWidth: 2,
    borderColor: '#bdbdbd',
    paddingVertical: 10,
  },
  footerButtonText: {
    color: '#bdbdbd',
    alignSelf: 'center',
  },

})
