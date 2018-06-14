import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';

//11.2

export default class StartScreen extends Component {

  render() {
    return(
      <ImageBackground source={require('../../images/background_image.jpg')} style={styles.container}>
        {/* Logo */}
        <View style={styles.logo}>
          <Image source={require('../../images/daikin-comfort-logo-crop-u1511.png')} />
          <Text style={styles.logoText}>smart thermostat</Text>
        </View>
        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.buttonText}>login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('CreateAccount')}>
            <Text style={styles.buttonText}>create account</Text>
          </TouchableOpacity>
        </View>
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
    color: 'rgb(3,169,244)',
  },
  buttonContainer: {
    paddingTop: 150,
  },
  button : {
    padding: 15,
    paddingLeft: 25,
    marginTop: 5,
    backgroundColor: 'rgba(250,250,250,0.9)',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize:16,
    color: 'rgb(3,169,244)',
    alignItems: 'flex-start'
  }
})
