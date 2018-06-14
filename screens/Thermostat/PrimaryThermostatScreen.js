import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, ImageBackground, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import MessageFooter from '../Components/MessageFooter';

import ScalableText from 'react-native-text';

export default class PrimaryThermostatScreen extends Component {
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
    primary: true,
    adjust: false,
    schedule: false,
    away: false,
    status: false,

    temp: 72 + '\u00B0',
  }

  render() {
    return(
      <View style={styles.container}>

        <View >
          <View style={{}}>
            <Icon name='fire'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {}}
            />
          </View>
          <View style={{marginLeft:15, marginTop:15, position:'absolute'}}>
            <Icon name='snowflake'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {}}
            />
          </View>


        </View>
        <View style={styles.temperatureContainer}>
          <Text numberOfLines={1} style={{color:'white', fontSize: 170}}>
            {this.state.temp}
          </Text>
        </View>
        <View>
          <Text>
            ICON
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    paddingLeft: 30,
    paddingTop: 30,
    justifyContent: 'center',
  },
  temperatureContainer: {
    flex:1,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
