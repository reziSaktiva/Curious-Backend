import React, { createContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING_DATA":
      return {
        ...state,
        loading: true,
      };
    case "SET_POSTS":
      let id = action.payload[action.payload.length - 1].id;

      return {
        ...state,
        loading: false,
        posts: action.payload,
        lastId: id,
      };
    case "MORE_POSTS":
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.payload],
        more: action.payload.length === 3,
        lastId: state.posts[state.posts.length - 1].id,
      };
    case "CREATE_POST":
      return {
        ...state,
        loading: false,
        posts: [action.payload, ...state.posts],
      };
    case "LIKE_POST":
      let index = state.posts.findIndex(post => post.id === action.payload.postId)
      const posts = []
      state.posts.forEach(post => posts.push(post))

      posts[index].likes = [...state.posts[index].likes, action.payload.data]
      posts[index].likeCount ++

      return {
        ...state
      }
    default:
      throw new Error("Don't understand action");
  }
};

export const PostContext = createContext({
  posts: [],
  newPosts: null,
  loading: false,
  lastId: null,
  more: true,
  loadingData: () => {},
  setPosts: (posts) => {},
  morePosts: () => {},
  createPost: () => {},
  like: () => {},
});

const initialState = {
  posts: [],
  more: true,
  newPosts: null,
  loading: null,
  lastId: null,
};

export const PostProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { posts, loading, lastId, more } = state;

  const loadingData = () => {
    dispatch({ type: "LOADING_DATA" });
  };

  const createPost = (post) => {
    dispatch({
      type: "CREATE_POST",
      payload: post,
    });
  };

  const setPosts = (posts) => {
    if (posts.length > 0) {
      dispatch({
        type: "SET_POSTS",
        payload: posts,
      });
    }
  };

  const morePosts = (posts) => {
    setTimeout(() => {
      dispatch({
        type: "MORE_POSTS",
        payload: posts,
      });
    }, 2000);
  };

  const like = (likeData, postId) => {
    const data = {
      id: likeData.id,
        owner: likeData.owner,
        createdAt: likeData.createdAt,
        displayName: likeData.displayName,
        displayImage: likeData.displayImage,
        colorCode: likeData.colorCode
    }
    if(likeData.isLike){
      dispatch({
        type: "LIKE_POST",
        payload: {
          data,
          postId
        }
      })
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        loadingData,
        morePosts,
        createPost,
        like,
        loading,
        lastId,
        more,
      }}
      {...props}
    />
  );
};
