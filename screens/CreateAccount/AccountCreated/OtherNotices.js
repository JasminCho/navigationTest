import React, { Component } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text, ImageBackground, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

import MessageFooter from '../../Components/MessageFooter';

export default class OtherNotices extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'other notices',
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
        <View style={{flex:1,}}>
          <View style={styles.step}>
            <Text style={styles.stepText}>end user license agreement</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {}}/>
          </View>
          <View style={styles.step}>
            <Text style={styles.stepText}>limited warranty</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {}}/>
          </View>
          <View style={styles.step}>
            <Text style={styles.stepText}>intellectual property</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {}}/>
          </View>
          <View style={[styles.step, {borderBottomWidth: 2.5}]}>
            <Text style={styles.stepText}>FCC compliance</Text>
            <Icon name='chevron-right'
              size={36}
              color='#bdbdbd'
              underlayColor='black'
              onPress={() => {}}/>
          </View>
        </View>

        {/* <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton} onPress={() => {}}>
            <Text style={styles.footerButtonText}>messages</Text>
            <View style={styles.footerIcons}>
              {
                this.renderIf (
                  this.state.messageCount > 0,
                  <View style={styles.notification}>
                    <Text>{this.state.messageCount}</Text>
                  </View>
                )
              }
              <Icon name='angle-up'
                type="font-awesome"
                size={36}
                color='#bdbdbd'
                underlayColor='black'
              />
            </View>
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
  description: {
    color: '#bdbdbd',
    fontSize: 18,
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
  // footer: {
  //   flexDirection: 'row',
  // },
  // footerButton: {
  //   flex: 1,
  //   borderTopWidth: 2,
  //   borderColor: '#bdbdbd',
  //   paddingVertical: 10,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },
  // footerButtonText: {
  //   color: '#bdbdbd',
  //   alignSelf: 'center',
  // },
  // footerIcons: {
  //   flexDirection:'row',
  //   alignSelf:'flex-end',
  //   paddingRight:5,
  // },
  // notification: {
  //   borderRadius:50,
  //   width:20,
  //   height:20,
  //   marginRight:5,
  //   backgroundColor:'#bdbdbd',
  //   alignSelf:'center',
  //   alignItems:'center',
  // },
})
