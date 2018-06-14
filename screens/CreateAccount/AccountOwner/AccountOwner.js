import React, { Component } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text, ImageBackground, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

import StepsFooter from '../../Components/StepsFooter';

//11.4/12.1/12.5

export default class AccountOwner extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'account owner',
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

  //TODO: Update all states from other pages
  state = {
    ownerName: "not entered",
    accountEmail: "not entered",
    accountPassword: "not entered",
    currentPage: 1,
  }

  render() {
    return(
      <View style={styles.container}>

        <View style={{flex:1}}>
          <View style={styles.step}>
            <Text style={styles.stepText}>name</Text>
            <Text style={styles.stepText}>{this.state.ownerName}</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {this.props.navigation.navigate('Name')}}/>
          </View>
          <View style={styles.step}>
            <Text style={styles.stepText}>email</Text>
            <Text style={styles.stepText}>{this.state.accountEmail}</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {this.props.navigation.navigate('Email')}}/>
          </View>
          <View style={[styles.step, {borderBottomWidth: 2.5}]}>
            <Text style={styles.stepText}>account password</Text>
            <Text style={styles.stepText}>{this.state.accountPassword}</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {this.props.navigation.navigate('Password')}}/>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>next step</Text>
          <Icon name='arrow-forward'
            size={26}
            color='#bdbdbd'
            underlayColor='black'
            onPress={() => {this.props.navigation.navigate('Home')}}/>
        </View>

        {/* <StepsFooter /> */}

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
