import React, { Component } from 'react';
import { StyleSheet, Text as ReactText } from 'react-native';
import { text, colors } from '../../styles';

class Text extends Component {
  render() {
    const {
      style,
      children,
      bold,
      light,
      white,
      red,
      blue,
      condensed,
      center,
      numberOfLines,
      ...rest
    } = this.props;
    return (
      <ReactText
        numberOfLines={numberOfLines || undefined}
        style={[
          style,
          css.text,
          style,
          condensed ? css.condensed : undefined,
          center ? css.center : undefined,
          blue ? css.blue : undefined,
          bold ? css.bold : undefined,
          light ? css.light : undefined,
          white ? css.white : undefined,
          red ? css.red : undefined
        ]}
        {...rest}
      >
        {children}
      </ReactText>
    );
  }
}
export default Text;

const css = StyleSheet.create({
  text: {
    ...text.fontRegular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.charcoal
  },
  bold: {
    ...text.fontBold
  },
  condensed: {
    ...text.fontBoldCondensed,
    letterSpacing: -1
  },
  light: {
    color: colors.lightGray
  },
  blue: {
    color: colors.blue
  },
  red: {
    color: colors.poppy
  },
  white: {
    color: '#fff'
  },
  center: {
    textAlign: 'center'
  }
});
