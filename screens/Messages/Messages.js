import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, ImageBackground, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Messages extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'messages',
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
  //TODO: Autogenerate list of messages
  state = {
    messageOne: "Learn how to save energy using your phone’s location to detect when you are away from home.",
    messageTwo: "setup geofencing now",
    messageThree: "blah blah blah",
  }

  render() {
    return(
      <View style={styles.container}>

        <ScrollView style={{flex:1, borderTopWidth:2.5,borderColor: '#bdbdbd',}}>
          <View style={styles.step}>
            <Text style={styles.stepText}>{this.state.messageOne}</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {}}/>
          </View>

          <View style={styles.step}>
            <Text style={styles.stepText}>{this.state.messageTwo}</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {}}/>
          </View>

          <View style={styles.step}>
            <Text style={styles.stepText}>{this.state.messageThree}</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {}}/>
          </View>

        </ScrollView>

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
    // borderTopWidth: 2.5,
    borderBottomWidth: 2.5,
    borderColor: '#bdbdbd',
    paddingVertical: 5,
    alignItems: 'center',
  },
  stepText: {
    color: '#bdbdbd',
    flex: 1,
    justifyContent: 'space-between',
  },
})
