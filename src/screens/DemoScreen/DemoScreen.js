// @flow
import React, { PureComponent } from 'react';
import { Navigation } from 'react-native-navigation';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import FastImage from 'AppComponents/FastImage/FastImage';
import ImageSlider from 'AppComponents/ImageSlider/ImageSlider';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class DemoScreen extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      cool: true
    }
  }

  render() {
    const images = [];
    return (
      <View style={styles.flex}>
        <Text>fdsfdsdsf</Text>
         
      </View>
    );
  }
}


export default DemoScreen;
