import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Easing
} from 'react-native';
import FullWidthCard from '../FullWidthCard/FullWidthCard';

export default class FullWidthCardWrapper extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      scaleValue: new Animated.Value(1)
    };
    this.onPressedIn = this.onPressedIn.bind(this);
    this.onPressedOut = this.onPressedOut.bind(this);
  }

  render() {
    return (
      <View
        style={[
          styles.containerWrapper,
          this.props.index === 0 ? { marginTop: 20 } : {}
        ]}
      >
        <Animated.View
          style={[
            { transform: [{ scale: this.state.scaleValue }] },
            styles.fullWidth
          ]}
        >
           <FullWidthCard
            {...this.props}
            onPressedIn={this.onPressedIn}
            onPressedOut={this.onPressedOut}
          />
        </Animated.View>
      </View>
    );
  }

  onPressedIn() {
    Animated.timing(this.state.scaleValue, {
      useNativeDriver: true,
      toValue: 0.98,
      duration: 200,
      easing: Easing.easeOutBack
    }).start();
  }

  onPressedOut() {
    Animated.timing(this.state.scaleValue, {
      useNativeDriver: true,
      toValue: 1,
      duration: 200,
      easing: Easing.easeOutBack
    }).start();
  }
}

let styles = StyleSheet.create({
  fullWidth: {
    flex: 1,
    width: '100%',
    position: 'relative'
  },
  containerWrapper: {
    flex: 1,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10
  }
});
