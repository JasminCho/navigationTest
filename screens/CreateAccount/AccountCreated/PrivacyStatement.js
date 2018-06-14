import React, { Component } from 'react';
import { View, ScrollView, KeyboardAvoidingView, StyleSheet, Text, ImageBackground, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

import MessageFooter from '../../Components/MessageFooter';

export default class PrivacyStatement extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'privacy statement',
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
        <ScrollView style={styles.statement}>
          <Text style={styles.description}>
            We will be transparent about the diff erent types of
            information we collect and how we use them.
            We will ask your permission before sharing
            your personal information with third parties for
            purposes other than at your request, and to do
            so only when we think they will provide you with a
            welcome additional service.
          </Text>
          <Text style={styles.description}>
            Consent to data collection and processing. By
            using Daikin Products, you agree to allow us to
            collect and process information as described in
            this Privacy Statement.
          </Text>
          <Text style={styles.description}>
            Consent to international data transfers.
            Your personal information may be collected,
            processed and stored by Daikin or its service
            providers in the United States and other countries
            where our servers reside. Please be aware that
            the privacy protections and legal requirements,
            including the rights of authorities to access your
            personal information, in some of these countries
            Consent to international data transfers.
            Your personal information may be collected,
            processed and stored by Daikin or its service
            providers in the United States and other countries
            where our servers reside. Please be aware that
            the privacy protections and legal requirements,
            including the rights of authorities to access your
            personal information, in some of these countries
            Consent to international data transfers.
            Your personal information may be collected,
            processed and stored by Daikin or its service
            providers in the United States and other countries
            where our servers reside. Please be aware that
            the privacy protections and legal requirements,
            including the rights of authorities to access your
            personal information, in some of these countries
            Consent to international data transfers.
            Your personal information may be collected,
            processed and stored by Daikin or its service
            providers in the United States and other countries
            where our servers reside. Please be aware that
            the privacy protections and legal requirements,
            including the rights of authorities to access your
            personal information, in some of these countries
          </Text>
        </ScrollView>

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
  statement: {
    flex:1,
    paddingRight:15,
  },
  description: {
    color: '#bdbdbd',
    marginBottom: 10,
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
