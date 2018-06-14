import React, { Component } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text, ImageBackground, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

import StepsFooter from '../../Components/StepsFooter';

//14.3

export default class AccountCreated extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'account created',
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
              Your account has been created and connected to your thermostat.
            </Text>
            <Text style={styles.description}>
              You will soon receive a welcome email from Daikin with a link to
              confirm your email address.
            </Text>
            <Text style={styles.description}>
              You will need to click on the link in the welcome email before
              you can login to your account.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          {/* <PageControl style={styles.footerPages} numberOfPages={4}  /> */}
          <Text style={styles.footerText}>login</Text>
          <Icon name='arrow-forward'
            size={26}
            color='#bdbdbd'
            underlayColor='black'
            onPress={() => {this.props.navigation.navigate('AccountAgreement')}}/>
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
