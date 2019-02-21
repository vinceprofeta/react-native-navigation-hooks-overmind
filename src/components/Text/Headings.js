import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Text from './Text';
import { text, colors } from '../../styles';

const headings = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
export const Headings = headings.reduce((accum, heading) => {
  accum[heading] = class extends Component {
    render() {
      const { style, children, ...rest } = this.props;
      return (
        <Text style={[css[heading], style]} {...rest}>
          {children}
        </Text>
      );
    }
  };
  return accum;
}, {});

const css = StyleSheet.create({
  H1: {
    ...text.fontBold,
    fontSize: 34,
    lineHeight: 44,
    color: colors.charcoal
  },
  H2: {
    fontSize: 20,
    lineHeight: 30,
    color: colors.charcoal
  },
  H3: {
    ...text.fontRegular,
    fontSize: 17,
    lineHeight: 27,
    color: colors.charcoal
  },
  H4: {
    ...text.fontRegular,
    fontSize: 16,
    lineHeight: 24,
    color: colors.gray
  },
  H5: {
    ...text.fontRegular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.charcoal
  },
  H6: {
    ...text.fontRegular,
    fontSize: 12,
    lineHeight: 19,
    color: colors.gray
  }
});
