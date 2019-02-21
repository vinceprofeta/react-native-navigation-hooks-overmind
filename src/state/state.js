import { Overmind } from "overmind";
import { createHook } from "overmind-react";
import { App_Service } from 'AppServices';

// const url = 'https://volv-app.herokuapp.com/v1/content';
// App_Service({url, method: 'GET'})

const overmind = new Overmind({
  state: {
    isLoadingPosts: true,
    showCount: "10",
    posts: [],
    filteredPosts: state => state.posts.slice(0, state.showCount)
  },
  actions: {
    getPosts: async ({ state, effects }) => {
      state.isLoadingPosts = true;
      state.content = await effects.request("https://volv-app.herokuapp.com/v1/content");
      state.isLoadingPosts = false;
    },
    changeShowCount: ({ state }, event) => {
      state.showCount = event.target.value;
    }
  },
  effects: {
    request: async (url) => {
      const response = await fetch(url);
      return response.json();
    }
  }
});

export const useOvermind = createHook(overmind);
