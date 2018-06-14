import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class AgreeFooter extends Component {
  render() {
    return(
      <View style={styles.footer}>
        <TouchableOpacity style={[styles.footerButton,{marginRight:5}]} onPress={() => {this.props.navigation.navigate('Main')}}>
          <Text style={styles.footerButtonText}>cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={() => {}}>
          <Text style={styles.footerButtonText}>I agree</Text>
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
    paddingVertical: 10,
  },
  footerButtonText: {
    color: '#bdbdbd',
    alignSelf: 'center',
  },
})
