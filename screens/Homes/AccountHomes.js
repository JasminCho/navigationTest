import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, ImageBackground, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

import MessageFooter from '../Components/MessageFooter';

//15.4

export default class AccountHomes extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'my homes',
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
  //TODO: Autogenerate list of homes and their names
  state = {
    homeName: "West Park Home (example)",
  }

  render() {
    return(
      <View style={styles.container}>

        <ScrollView style={{flex:1,}}>
          <View style={styles.step}>
            <Icon name='home'
              size={36}
              color='#bdbdbd'
            />
            <Text style={styles.stepText}>{this.state.homeName}</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {}}/>
          </View>

          <View style={[styles.step, {borderBottomWidth: 2.5}]}>
            <Text style={styles.stepText}>add home</Text>
            <Icon name='add-circle-outline'
              size={36}
              color='white'
              underlayColor='black'
              onPress={() => {this.props.navigation.navigate('AddHome')}}/>
          </View>
        </ScrollView>

        <View style={{justifyContent:'flex-end', paddingVertical: 50}}>
          <View style={[styles.step, {borderBottomWidth: 2.5}]}>
            <Icon name='settings'
              size={36}
              color='#bdbdbd'
            />
            <Text style={styles.stepText}>my account</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {}}/>
          </View>
        </View>


        {/* <View style={styles.footer}>
          <TouchableOpacity style={[styles.footerButton,{marginRight:5}]} onPress={() => {this.props.navigation.navigate('Main')}}>
            <Text style={styles.footerButtonText}>cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.footerButton} onPress={() => {}}>
            <Text style={styles.footerButtonText}>I agree</Text>
          </TouchableOpacity>
        </View> */}

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
