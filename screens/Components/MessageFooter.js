import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default class MessageFooter extends Component {
  //TODO: make this function a separate file
  renderIf(condition, content) {
    if (condition) {
      return content;
    } else {
      return null;
    }
  }

  //TODO: update message count
  state = {
    messageCount: 3,
  }

  render() {
    return(
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
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
    borderTopWidth: 2,
    borderColor: '#bdbdbd',
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#bdbdbd',
    alignSelf: 'center',
  },
  footerIcons: {
    flexDirection:'row',
    alignSelf:'flex-end',
    paddingRight:5,
  },
  notification: {
    borderRadius:50,
    width:20,
    height:20,
    marginRight:5,
    backgroundColor:'#bdbdbd',
    alignSelf:'center',
    alignItems:'center',
  },
})
