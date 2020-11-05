import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  NativeModules,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native';

const {TruecallerAuthModule} = NativeModules;

export default class Login extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    console.log(TruecallerAuthModule, 'authmodule');
    console.log(NativeModules, 'NativeModules');

    // TRUECALLER.initializeClient();

    // TRUECALLER.on(TRUECALLER_EVENT.TrueProfileResponse, (profile) => {
    //   console.log('Truecaller profile data: ', profile);
    //   // add other logic here related to logi)n/sign-up as per your use-case.
    // });

    // TRUECALLER.on(TRUECALLER_EVENT.TrueProfileResponseError, (error) => {
    //   console.log('User rejected the truecaller consent request! ', error);
    // });

    const onSessionConnect = (event) => {
      event = event.event;
      if (event === 'Missed call Received') {
        console.log('inside if missed call received');
        TruecallerAuthModule.verifyComplete('Puneet', 'Tiwari');
      }
      if (event === 'Verification complete') {
        TruecallerAuthModule.verifyComplete('Puneet', 'Tiwari');
        console.log('inside if missed call received');
      }
    };

    DeviceEventEmitter.addListener('onSessionConnect', onSessionConnect);
  }

  handleAuth = () => {
    console.log('auth clicked');
    // TruecallerAuthModule.authenticate()
    //   .then((res) => {
    //     this.setState({user: res});
    //     console.log(res, 'from auth');
    //   })
    //   .catch((err) => console.log(err, 'err'));
    TruecallerAuthModule.Verify('+919150435718');
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
            <Text>Email: {this.state.user.email || 'hey my e mail'}</Text>
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
