// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Alert
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { pushTabBasedApp } from 'AppNavigator';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#039893'
  }
});

class LoginScreen extends React.PureComponent {

  loginWithFacebook = () => {
    pushTabBasedApp();
  };

  render() {
    return (
      <View style={styles.flex}>
        <FontAwesome5.Button
          solid
          name={'facebook'}
          style={styles.button}
          onPress={this.loginWithFacebook}
        >
          Login with Facebook
        </FontAwesome5.Button>
      </View>
    );
  }
}

LoginScreen.propTypes = {
};

export default LoginScreen;
