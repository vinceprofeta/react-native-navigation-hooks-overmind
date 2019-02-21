// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';
import { get } from 'lodash';
import FullWidthCardWrapper from 'AppComponents/FullWidthCardWrapper/FullWidthCardWrapper';



class ListComponent extends Component {
  state = {
    legacy: false,
    clipped: true,
    fastImage: true,
    showClockTutorial: false
  };

  render() {
    const list = this.props.list;
    console.log(list)
    return (
      <View style={styles.flex}>
        <FlatList
          legacyImplementation={this.state.legacy}
          removeClippedSubviews={this.state.clipped}
          onEndReachedThreshold={this.state.legacy ? bottomThreshold : 0.5}
          style={{
            flex: 1,
            width: '100%',
            paddingTop: 0,
            backgroundColor: 'white'
          }}
          keyExtractor={(item, index) => {
            return `deals-list-${index}`;
          }}
          data={list}
          renderItem={({ item, index }) => {
            return (
              <FullWidthCardWrapper
                key={`deal-${index}`}
                useFastImage={this.state.fastImage}
                style={
                  index == 0
                    ? { marginTop: this.state.legacy ? 20 : 0 }
                    : {}
                }
                index={index}
                onClickDeal={this.onClickDealItem.bind(this)}
                deal={item}
              />
            );
          }}
        />
      </View>
    );
  }

  onClickDealItem() {
    console.log('sfdjhfdsjhsdfhjkfsd')
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 5
  },
  box: {
    maxHeight: 200,
    flex: 1,
    backgroundColor: 'red'
  }
});

export default ListComponent;
