import React, { Component } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text, ImageBackground, Image, Button, TouchableOpacity, TextInput } from 'react-native';

//11.3

export default class LoginScreen extends Component {
  state = {
    username: '',
    password: '',
  }

  handleUsernameUpdate = username => {
    this.setState({username})
  }

  handlePasswordUpdate = password => {
    this.setState({password})
  }

  login = async () => {

    this.props.navigation.navigate('Account')
    console.log(this.state.username)
    console.log(this.state.password)
  }

  render() {
    return(
      // <View style={styles.container}>
      //   <Text>This is the Login Screen</Text>
      //   <Button title="Back" onPress={() => this.props.navigation.navigate('Main')} />
      // </View>

      <ImageBackground source={require('../../images/background_image.jpg')} style={styles.container}>
        {/* Logo */}
        <View style={styles.logo}>
          <Image source={require('../../images/daikin-comfort-logo-crop-u1511.png')} />
          <Text style={styles.logoText}>smart thermostat</Text>
        </View>
        {/* Buttons */}
        <KeyboardAvoidingView style={styles.buttonContainer} behavior="padding">
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid={'transparent'}
            placeholder="email"
            keyboardType='email-address'
            placeholderTextColor='#03a9f4'
            autoFocus={true}
            value={this.state.username}
            onChangeText={this.handleUsernameUpdate}
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid={'transparent'}
            placeholder="password"
            secureTextEntry={true}
            placeholderTextColor='#03a9f4'
            autoCapitalize='none'
            autoCorrect={false}
            value={this.state.password}
            onChangeText={this.handlePasswordUpdate}
          />
          <TouchableOpacity style={styles.loginButton} onPress={this.login}>
            <Text style={styles.loginButtonText}>login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => console.log('An email with a temporary password has been sent to you.')}>
            <Text style={styles.buttonText}>forgot password</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100,
  },
  logo : {
    paddingLeft: 30,
  },
  logoText : {
    fontSize: 25,
    color: '#03a9f4',
  },
  buttonContainer: {
    justifyContent: 'center',
    paddingTop: 100,
  },
  button : {
    padding: 15,
    paddingLeft: 25,
    marginTop: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  loginButton: {
    padding: 15,
    paddingLeft: 25,
    marginTop: 5,
    flexDirection: 'row',
    backgroundColor: 'rgba(3,169,244,0.5)',
  },
  buttonText: {
    fontSize:16,
    color: '#03a9f4',
    alignItems: 'flex-start',
  },
  loginButtonText: {
    fontSize:16,
    color: 'white',
    alignItems: 'flex-start',
  },
  inputBox : {
    // color: '#03a9f4',
    padding: 15,
    paddingLeft: 25,
    marginTop: 5,
    backgroundColor: 'rgba(250,250,250,0.9)',
    fontSize: 16,
  },
})
