import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { get } from 'lodash';

import { pushTutorialScreen } from 'AppNavigator';
import Tab1ScreenInner from './Tab1ScreenInner';


const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


class Tab1Screen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
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
      <Tab1ScreenInner {...this.props} />
    );
  }
}

Tab1Screen.propTypes = {
  
};

export default Tab1Screen;
