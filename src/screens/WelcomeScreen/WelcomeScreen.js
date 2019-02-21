// @flow

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import { Button } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';

import { LOGIN_SCREEN } from 'AppNavigator';
import { SFProDisplayMedium } from 'AppFonts';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#039893',
    width: 230,
    marginTop: 30,
    borderRadius: 25
  },
  buttonTitle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  logo: {
    width: 300,
    height: 120,
    resizeMode: 'contain'
  },
  logoTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500'
  }
});

class WelcomeScreen extends React.PureComponent {

  handleGetStartAction = (screenType) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: LOGIN_SCREEN,
        passProps: {
          screenType
        },
        options: {
          topBar: {
            title: {
              text: 'YEPPPPP'
            }
          }
        }
      }
    });
  };

  render() {
    return (
      <View style={styles.flex}>
        <Image
          style={styles.logo}
          source={require('img/images/logo.png')}
        />
        <SFProDisplayMedium style={styles.logoTitle}>
          {'Welcome to RNN v2 Starter Kit!'}
        </SFProDisplayMedium>
        <Button
          onPress={() => this.handleGetStartAction('Tab')}
          title={'Start Tab Based App'}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />
      </View>
    );
  }
}

export default WelcomeScreen;
