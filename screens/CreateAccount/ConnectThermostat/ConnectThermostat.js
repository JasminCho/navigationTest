import React, { Component } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text, ImageBackground, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

import StepsFooter from '../../Components/StepsFooter';

//14.1

export default class HomeInfo extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'connect to thermostat',
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

  render() {
    return(
      <View style={styles.container}>

        <View style={{flex:1}}>
          <View style={{flexDirection: 'column', paddingBottom: 10}}>
            <Text style={styles.description}>
              With wifi enabled on your thermostat, go to: air quality/settings/configuration/account.
            </Text>
            <Text style={styles.description}>
              Enter the six digit number displayed on the account screen.
            </Text>
          </View>
          <View style={styles.step}>
            <Text style={styles.stepText}>enter code</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {this.props.navigation.navigate('EnterCode')}}/>
          </View>
        </View>

        <View style={styles.footer}>
          {/* <PageControl style={styles.footerPages} numberOfPages={4}  /> */}
          <Text style={styles.footerText}>next step</Text>
          <Icon name='arrow-forward'
            size={26}
            color='#bdbdbd'
            underlayColor='black'
            onPress={() => {}}/>
        </View>

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
  description: {
    color: '#bdbdbd',
    fontSize: 18,
    marginBottom: 10,
  },
  step: {
    flexDirection: 'row',
    borderTopWidth: 2.5,
    borderColor: '#bdbdbd',
    paddingVertical: 5,
    alignItems: 'center',
    borderBottomWidth: 2.5,
  },
  stepText: {
    color: '#bdbdbd',
    flex: 1,
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    borderTopWidth: 2,
    borderColor: '#bdbdbd',
    marginLeft: 20,
    padding: 10,
  },
  footerText: {
    color: 'white',
    alignSelf: 'center',
  },
})
