import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {useOvermind} from 'AppStateManagement';
import ListComponent from './components/ListComponent/ListComponent';


const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


const Tab1Screen = (props) => {
  const {state, actions} = useOvermind();

  useEffect(() => {
    actions.getPosts();
  }, []);

  if (state.isLoadingPosts) {
    return <Text>Loading posts...</Text>;
  }

  return (
    <View style={styles.flex}>
      {
        state.content ? <ListComponent list={state.content.items} /> : null
      }
    </View>
  );
};

export default Tab1Screen;