import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, ImageBackground, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

import MessageFooter from '../Components/MessageFooter';

export default class HomeThermostats extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'thermostats',
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
  //TODO: Autogenerate list of thermostats for this particular home
  state = {
    thermostatLocation: "upstairs",
    thermostatLocation2: "downstairs",
  }

  render() {
    return(
      <View style={styles.container}>

        <ScrollView style={{flex:1,}}>
          <View style={styles.step}>
            <Icon name='ios-phone-landscape'
              size={36}
              color='#bdbdbd'
              type="ionicon"
              containerStyle={{marginRight:5}}
            />
            <Text style={styles.stepText}>{this.state.thermostatLocation}</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {}}/>
          </View>

          <View style={styles.step}>
            <Icon name='ios-phone-landscape'
              size={36}
              color='#bdbdbd'
              type="ionicon"
              containerStyle={{marginRight:5}}
            />
            <Text style={styles.stepText}>{this.state.thermostatLocation2}</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {}}/>
          </View>

          <View style={styles.step}>
            <Icon name='ios-phone-landscape'
              size={36}
              color='#bdbdbd'
              type="ionicon"
              containerStyle={{marginRight:5}}
            />
            <Text style={styles.stepText}>office</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {}}/>
          </View>

          <View style={styles.step}>
            <Icon name='ios-phone-landscape'
              size={36}
              color='#bdbdbd'
              type="ionicon"
              containerStyle={{marginRight:5}}
            />
            <Text style={styles.stepText}>garage</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {}}/>
          </View>

          <View style={[styles.step, {borderBottomWidth: 2.5}]}>
            <Text style={styles.stepText}>add thermostat</Text>
            <Icon name='add-circle-outline'
              size={36}
              color='white'
              underlayColor='black'
              onPress={() => {}}/>
          </View>
        </ScrollView>

        <MessageFooter/>

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
