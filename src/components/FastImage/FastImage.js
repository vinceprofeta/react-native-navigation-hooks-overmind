import FastImage from 'react-native-fast-image';
import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class FastImageItem extends React.PureComponent {
  state = {};
  render() {
    return this.props.useImage || this.state.error ? (
      <View style={{ flex: 1 }}>
        {this.props.loader ? (
          <Animatable.Image
            useNativeDriver={true}
            animation={this.state.loaded ? 'fadeOut' : 'fadeIn'}
            duration={300}
            resizeMode={
              this.props.contain
                ? FastImage.resizeMode.contain
                : FastImage.resizeMode.cover
            }
            style={[
              {
                flex: 1,
                alignSelf: 'stretch',
                position: 'absolute',
                zIndex: 2,
                width: 400,
                height: 400
              },
              this.props.imageStyle || {}
            ]}
            source={{ uri: this.props.loader }}
          />
        ) : null}
        <Image
          resizeMode={
            this.props.contain
              ? FastImage.resizeMode.contain
              : FastImage.resizeMode.cover
          }
          onLoad={
            this.props.loader
              ? () => this.setState({ loaded: true })
              : undefined
          }
          style={[
            {
              flex: 1,
              alignSelf: 'stretch',
              width: undefined,
              height: undefined
            },
            this.props.imageStyle || {}
          ]}
          source={{ uri: this.props.image }}
        />
      </View>
    ) : (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {this.props.loader ? (
          <Animatable.Image
            useNativeDriver={true}
            animation={this.state.loaded ? 'fadeOut' : 'fadeIn'}
            delay={this.props.delay || 1}
            duration={this.props.duration || 300}
            resizeMode={
              this.props.contain
                ? FastImage.resizeMode.contain
                : FastImage.resizeMode.cover
            }
            style={[
              {
                justifyContent: 'center', alignItems: 'center',
                flex: 1,
                alignSelf: 'stretch',
                position: 'absolute',
                zIndex: 2,
                width: 400,
                height: 400
              },
              this.props.imageStyle || {}
            ]}
            source={{ uri: this.props.loader }}
          />
        ) : null}
        <FastImage
          fallback={true}
          style={[
            styles.image,
            this.state.loaded || !this.props.loader
              ? { opacity: 1 }
              : { opacity: 0 }
          ]}
          source={{
            uri: this.props.image,
            priority: this.props.priority
              ? FastImage.priority[this.props.priority]
              : FastImage.priority.normal
          }}
          onLoadEnd={
            this.props.loader
              ? () => this.setState({ loaded: true })
              : undefined
          }
          onError={() => {
            this.setState({
              error: true
            });
          }}
          resizeMode={
            this.props.contain
              ? FastImage.resizeMode.contain
              : FastImage.resizeMode.cover
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
