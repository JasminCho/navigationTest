import React, { Component } from "react";
import { KeyboardAvoidingView, ImageBackground } from 'react-native';

import StartScreenButton from '../StartScreenButton/index';
import Logo from '../Logo/index';
import LoginField from '../LoginField/index';

import styles from './styles';

var image = require('../../assets/images/background_image.jpg');

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
    };
  }

  login = async () => {
    console.log(this.state.username)
    console.log(this.state.password)
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }

  render() {
    return(
      <ImageBackground source={image} style={styles.container}>
        <Logo />
        <KeyboardAvoidingView behavior="padding">
          <LoginField
            placeholder="email address"
            keyboardType="email-address"
            focusBool={true}
            value={this.state.username}
            handleValueUpdate={(username) => this.setState({username})}
          />
          <LoginField
            placeholder="password"
            secureBool={true}
            value={this.state.password}
            handleValueUpdate={(password) => this.setState({password})}
          />
          <StartScreenButton
            text="login"
            handleClick={this.login}
            buttonColor="rgba(3,169,244,0.5)"
            textColor="white"
          />
          <StartScreenButton
            text="forgot password"
            handleClick={() => { alert("An email with a temporary password has been sent to you.") }}
            buttonColor="rgba(250,250,250,0.9)"
            textColor="rgb(3,169,244)"
          />
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

export default Login;
