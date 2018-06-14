import React, { Component } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text, ImageBackground, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

import AgreeFooter from '../../Components/AgreeFooter';

//14.4

export default class AccountAgreement extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'login',
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

  //TODO: Compare login details with what they input and see if they match
  state = {
    accountEmail: "not entered",
    accountPassword: "not entered",
  }

  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: '#b3b3b3',
      backgroundColor2: '#b3b3b3'
    };
  }

  onFocus() {
    console.log('this is focusing')
    this.setState({
      backgroundColor: 'white'
    })
  }
  onFocus2() {
    console.log('this is focusing')
    this.setState({
      backgroundColor2: 'white'
    })
  }

  onBlur() {
    console.log('this is blurring')
    this.setState({
      backgroundColor: '#b3b3b3'
    })
  }
  onBlur2() {
    console.log('this is blurring')
    this.setState({
      backgroundColor2: '#b3b3b3'
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <KeyboardAvoidingView style={{}} behavior="padding">
          <TextInput
            onFocus={() => this.onFocus() }
            onBlur={() => this.onBlur() }
            style={[styles.inputBox, {backgroundColor: this.state.backgroundColor}]}
            underlineColorAndroid={'transparent'}
            placeholder="email address"
            placeholderTextColor='#666666'
            keyboardType='email-address'
            autoFocus={true}
          />
          <TextInput
            onFocus={() => this.onFocus2() }
            onBlur={() => this.onBlur2() }
            style={[styles.inputBox, {backgroundColor: this.state.backgroundColor2}]}
            underlineColorAndroid={'transparent'}
            placeholder="password"
            placeholderTextColor='#666666'
            secureTextEntry={true}
          />
        </KeyboardAvoidingView>

        <View style={{}}>
          <View style={{flexDirection: 'column', paddingBottom: 10}}>
            <Text style={styles.description}>
              By signing into your Daikin account, you agree to the terms of service.
            </Text>
          </View>
        </View>

        <View style={{flex:1,}}>
          <View style={styles.step}>
            <Text style={styles.stepText}>terms of service</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {this.props.navigation.navigate('TOS')}}/>
          </View>
          <View style={styles.step}>
            <Text style={styles.stepText}>privacy statement</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {this.props.navigation.navigate('PS')}}/>
          </View>
          <View style={[styles.step, {borderBottomWidth: 2.5}]}>
            <Text style={styles.stepText}>other notices</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {this.props.navigation.navigate('ON')}}/>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={[styles.footerButton,{marginRight:5}]} onPress={() => {this.props.navigation.navigate('Main')}}>
            <Text style={styles.footerButtonText}>cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.footerButton} onPress={() => {this.props.navigation.navigate('Account')}}>
            <Text style={styles.footerButtonText}>I agree</Text>
          </TouchableOpacity>
        </View>

        {/* TODO: Navigation doesn't work */}
        {/* <AgreeFooter/> */}

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
