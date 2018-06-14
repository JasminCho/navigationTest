import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

export default class StepsFooter extends Component {
  //TODO: make this function a separate file
  renderIf(condition, content) {
    if (condition) {
      return content;
    } else {
      return null;
    }
  }
  //TODO: update currentPage state
  state = {
    currentPage: 1,
    totalPages: 4,
  }

  render() {
    return(
      <View style={styles.footer}>
        <View style={[styles.footerButton,{marginRight:5, alignItems:'center', justifyContent:'center'}]} onPress={() => {this.props.navigation.navigate('Main')}}>
          {
            this.renderIf (
              this.state.currentPage === 2 || this.state.currentPage === 3,
              <Icon name='arrow-back'
                color='#bdbdbd'
                underlayColor='black'
                onPress={() => {this.props.navigation.goBack()}}
                size={26}
                containerStyle={{paddingRight:40}}
              />
            )
          }

          <Text style={styles.footerButtonText}>
            {this.state.currentPage} of {this.state.totalPages}
          </Text>
        </View>
        {
          this.renderIf (
            this.state.currentPage !== 4,
            <TouchableOpacity style={[styles.footerButton,{alignItems:'center', justifyContent:'flex-end'}]} onPress={() => {}}>
              <Text style={{color:'white'}}>next step</Text>
              <Icon name='arrow-forward'
                size={26}
                color='#bdbdbd'
                underlayColor='black'
                onPress={() => {this.props.navigation.navigate('Home')}}
              />
            </TouchableOpacity>
          )
        }
        {
          this.renderIf (
            this.state.currentPage === 4,
            <TouchableOpacity style={[styles.footerButton,{alignItems:'center', justifyContent:'flex-end'}]} onPress={() => {}}>
              <Text style={{color:'white'}}>login</Text>
              <Icon name='arrow-forward'
                size={26}
                color='#bdbdbd'
                underlayColor='black'
                onPress={() => {this.props.navigation.navigate('AccountAgreement')}}
              />
            </TouchableOpacity>
          )
        }


      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
  },
  footerButton: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 2,
    borderColor: '#bdbdbd',
    paddingVertical: 10,
  },
  footerButtonText: {
    color: '#bdbdbd',
    // alignSelf: 'center',
  },
})
