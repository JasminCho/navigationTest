import React, { Component } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text, ImageBackground, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

//12.2

export default class OwnerName extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'name',
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

  //TODO: Update OwnerName state

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
        <KeyboardAvoidingView style={{flex:1}} behavior="padding">
          <TextInput
            onFocus={() => this.onFocus() }
            onBlur={() => this.onBlur() }
            style={[styles.inputBox, {backgroundColor: this.state.backgroundColor}]}
            underlineColorAndroid={'transparent'}
            placeholder="first name"
            placeholderTextColor='#666666'
            autoFocus={true}
          />
          <TextInput
            onFocus={() => this.onFocus2() }
            onBlur={() => this.onBlur2() }
            style={[styles.inputBox, {backgroundColor: this.state.backgroundColor2}]}
            underlineColorAndroid={'transparent'}
            placeholder="last name"
            placeholderTextColor='#666666'
          />
        </KeyboardAvoidingView>
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
})
