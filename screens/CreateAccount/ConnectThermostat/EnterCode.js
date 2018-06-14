import React, { Component } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text, ImageBackground, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import CodeInput from 'react-native-code-input';

//14.2

export default class EnterCode extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'enter code',
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

        <View style={{flex:1, justifyContent:'center',}}>
          <CodeInput
            codeLength={6}
            // activeColor='white'
            // inactiveColor='#b3b3b3'
            autoFocus={true}
            inputPosition='left'
            size={45}
            // onFulfill={(code) => this._onFulfill(code)}
            codeInputStyle={{ backgroundColor:'#b3b3b3' }}
          />
        </View>

        <View style={{flex:1}}>
          <View style={styles.step}>
            <Text style={styles.stepText}>send code and link to account</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {this.props.navigation.navigate('AccountCreated')}}/>
          </View>
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
})
