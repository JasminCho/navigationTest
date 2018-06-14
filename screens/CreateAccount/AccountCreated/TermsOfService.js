import React, { Component } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text, ImageBackground, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

import MessageFooter from '../../Components/MessageFooter';

//14.5

export default class TermsOfService extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'terms of service',
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

        <View style={styles.body}>
          <Text style={styles.description}>
            These Terms of Service (“Terms”) govern your
            access to and use of the Services. Please read
            these terms carefully. They require the use of
            binding arbitration to resolve disputes rather
            than jury trials or class actions. Please follow
            the instructions in the Dispute Resolution and
            Arbitration section below if you wish to opt out
            of this provision. The term “you,” as used in
            these Terms, means any person or entity who
            accesses or uses the Services and any person
            or entity who creates an Account and accepts
            these Terms, including Owners, Authorized Users
            (as defi ned in Section 2(b)), and the parents or
            guardians of Authorized Users, as applicable
            (as described in Section 1(b)(ii)). These Terms
            give you specifi c legal rights, and you may also
            have other legal rights in addition, which vary
            from jurisdiction to jurisdiction. The disclaimers,
            exclusions, and limitations of liability under these
            Terms will not apply to the extent prohibited
            by law.
          </Text>
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
  body: {
    flex: 1,
    paddingRight: 10,
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
