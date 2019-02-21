import React from 'react';
import { Navigation } from 'react-native-navigation';
import _ from 'lodash';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Platform
} from 'react-native';
import FastImage from '../FastImage/FastImage';
import { H3, H6} from '../Text';
import ImageSlider from '../ImageSlider/ImageSlider';

const ANDROID = Platform.OS === 'android';

export default class DealsItemInnerActive extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      scaleValue: new Animated.Value(1)
    };
    this.onPressedIn = this.props.onPressedIn.bind(this);
    this.onPressedOut = this.props.onPressedOut.bind(this);
    this.onPress = this.onPress.bind(this);
    this.loop = false;
  }

  render() {
    // const fetchUrl = 'https://res.cloudinary.com/himay6hk5/image/fetch/';
    // const uploadUrl = 'https://res.cloudinary.com/himay6hk5/image/upload';

    const images = [_.get(this.props, 'deal.data.preview.image') || _.get(this.props, 'deal.preview.image') || _.get(this.props, 'deal.content_preview.image')];
    const title = [_.get(this.props, 'deal.data.preview.title') || _.get(this.props, 'deal.preview.title') || _.get(this.props, 'deal.content_preview.title')];
    const description = [_.get(this.props, 'deal.data.preview.description') || _.get(this.props, 'deal.preview.description') || _.get(this.props, 'deal.content_preview.description')];
    const logo = _.get(this.props, 'deal.logo');
    const feedLogo = _.get(this.props, 'deal.logo');

    return (
      <View style={[styles.container, this.props.style || {}]}>
        <View
          style={[
            styles.containerShadowWrapper,
            ANDROID ? styles.androidContentBorder : {}
          ]}
        >
          <View style={styles.fullWidth}>
            {logo && feedLogo ? (
              <View
                pointerEvents="none"
                style={[
                  styles.logoWrapper,
                  { top: images.length > 1 ? 163 : 155 }
                ]}
              >
                <View style={[styles.logoCircle]}>
                  <FastImage
                    style={{ width: 50, height: 50 }}
                    useImage
                    style={styles.logoImage}
                    contain
                    image={`${logo}`}
                  />
                </View>
              </View>
            ) : null}
            <View
              style={[
                styles.imageWrapper,
                { height: images.length > 1 ? 210 : 206 }
              ]}
            >
             
                <ImageSlider
                  removeClippedSubviews={false}
                  loadMinimal={false}
                  activeDotStyle={{ height: 5, width: 5 }}
                  dotStyle={{ height: 5, width: 5 }}
                  height={images.length > 1 ? 210 : 206}
                  paginationStyle={{ bottom: 0 }}
                >
                  {_.map(images, (image, i) => {                 
                    return (
                      <TouchableWithoutFeedback
                        onPress={() => this.onPress()}
                        onPressIn={this.onPressedIn}
                        onPressOut={this.onPressedOut}
                        key={`${i}`}
                      >
                        <View style={styles.imageHeight}>
                          <FastImage
                            duration={800}
                            delay={300}
                            priority={
                              i === 0 && this.props.index < 10 ? 'high' : 'normal'
                            }
                            useImage={!this.props.useFastImage}
                            index={this.props.index}
                            imageIndex={i}
                            loader={i === 0 ? image : null}
                            image={image}
                          />
                        </View>
                      </TouchableWithoutFeedback>
                    );
                  })}
                </ImageSlider>
             
            </View>

            <TouchableWithoutFeedback
              onPress={() => this.onPress()}
              onPressIn={this.onPressedIn}
              onPressOut={this.onPressedOut}
            >
              <View style={[styles.contentWrapper]}>
                <H3 numberOfLines={2} bold style={styles.text}>
                  {title}
                </H3>
                <H6 numberOfLines={4} style={styles.subtext}>
                  {description}
                </H6>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }

  onPress(e) {
   this.props.onPress(e) 
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
}

let styles = StyleSheet.create({
  fullWidth: {
    flex: 1,
    width: '100%',
    position: 'relative'
  },
  imageWrapper: {
    width: '100%',
    position: 'relative'
  },
  container: {
    flex: 1,
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowColor: '#455B63',
    shadowOpacity: 0.06,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  containerShadowWrapper: {
    flex: 1,
    width: '100%',
    position: 'relative',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#455B63',
    shadowOpacity: 0.1,
    shadowRadius: 9,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  androidContentBorder: {
    borderWidth: 1,
    // borderColor: colors.borderColor
  },
 
  imageHeight: {
    height: 188,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden'
  },
  contentWrapper: {
    padding: 12,
    paddingTop: 5,
    width: '100%',
    backgroundColor: '#fff',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  
  logoWrapper: {
    position: 'absolute',
    left: 13,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 2
  },

  logoCircle: {
    width: 50,
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 50,
    padding: 5,
    overflow: 'hidden'
  },

  logoImage: {
    // backgroundColor: '#fff'
  },
  text: {
    fontSize: 16,
    lineHeight: 24
  },
  subtext: {
    fontSize: 14,
    lineHeight: 25
  }
});
