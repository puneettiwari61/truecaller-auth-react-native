import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  NativeModules,
  TouchableOpacity,
} from 'react-native';

const {TruecallerAuthModule} = NativeModules;

export default class Login extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    console.log(TruecallerAuthModule, 'authmodule');
    console.log(NativeModules, 'NativeModules');
  }

  handleAuth = () => {
    console.log('auth clicked');
    // TruecallerAuthModule.authenticate()
    //   .then((res) => {
    //     this.setState({user: res});
    //     console.log(res, 'from auth');
    //   })
    //   .catch((err) => console.log(err, 'err'));
    TruecallerAuthModule.Verify('9150435718');
  };

  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity onPress={this.handleAuth}>
          <Text style={styles.text}> Auth </Text>
        </TouchableOpacity>
        {this.state.user && (
          <View>
            <Text>
              Name: {this.state.user.firstName + this.state.user.lastName}
            </Text>
            <Text>Email: {this.state.user.email}</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    // textAlign: 'center',
    color: '#455202',
  },
  view: {
    textAlign: 'center',
    alignSelf: 'center',
    // flex:1
  },
});
