// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { get } from 'lodash';

import { pushTutorialScreen } from 'AppNavigator';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class Tab2Screen extends PureComponent {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'TWO Screen'
        },
        drawBehind: true,
        visible: false,
        animate: true
      }
    };
  }

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ buttonId }) {
    const { data } = this.props;

    switch (buttonId) {
      case 'nav_logout_btn': {
        pushTutorialScreen();
        break;
      }
      case 'nav_user_btn': {
        Alert.alert(get(data, 'user.name', 'Unknown User'));
        break;
      }
      default:
        break;
    }
  }

  render() {
    return (
      <View style={styles.flex}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Play top buttons!
        </Text>
      </View>
    );
  }
}

Tab2Screen.propTypes = {
  
};

export default Tab2Screen;
