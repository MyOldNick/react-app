//actions types
import {
  SET_POSTS,
  SET_LOAD_POSTS,
  ADD_POST,
  SET_LOAD_MORE_POSTS,
  DELETE_POST,
  UPDATE_POST
} from "../actionsTypes/postsTypes";

export const getPosts = (data) => ({ type: SET_POSTS, payload: data });

export const setLoad = (data) => ({ type: SET_LOAD_POSTS, payload: data });

export const addPost = (data) => ({ type: ADD_POST, payload: data });

export const loadMore = (data) => ({ type: SET_LOAD_MORE_POSTS, payload: data });

export const updatePost = (data) => ({type: UPDATE_POST, payload: data})

export const deletePost = (data) => ({ type: DELETE_POST, payload: data });
