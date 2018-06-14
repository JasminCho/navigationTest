import React, { Component } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text, ImageBackground, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

import StepsFooter from '../../Components/StepsFooter';

//13.1/13.4

export default class HomeInfo extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'home',
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
    homeName: "not entered",
    homeStreet: "not entered",
    homeZipcode: "not entered",
  }

  render() {
    return(
      <View style={styles.container}>

        <View style={{flex:1}}>
          <View style={{flexDirection: 'row', paddingBottom: 10}}>
            <Text style={styles.description}>
              Name & addresses for this home:
            </Text>
          </View>
          <View style={styles.step}>
            <Text style={styles.stepText}>name</Text>
            <Text style={styles.stepText}>{this.state.homeName}</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {this.props.navigation.navigate('HomeName')}}/>
          </View>
          <View style={styles.step}>
            <Text style={styles.stepText}>street</Text>
            <Text style={styles.stepText}>{this.state.homeStreet}</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {this.props.navigation.navigate('HomeAddress')}}/>
          </View>
          <View style={[styles.step, {borderBottomWidth: 2.5}]}>
            <Text style={styles.stepText}>zip code</Text>
            <Text style={styles.stepText}>{this.state.homeZipcode}</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {this.props.navigation.navigate('HomeAddress')}}/>
          </View>
        </View>

        <View style={styles.footer}>
          {/* <PageControl style={styles.footerPages} numberOfPages={4}  /> */}
          <Text style={styles.footerText}>next step</Text>
          <Icon name='arrow-forward'
            size={26}
            color='#bdbdbd'
            underlayColor='black'
            onPress={() => {this.props.navigation.navigate('ConnectThermostat')}}/>
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
  description: {
    color: '#bdbdbd',
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
