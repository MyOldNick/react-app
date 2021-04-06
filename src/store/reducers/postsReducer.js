//actions types
import { SET_POSTS, SET_LOAD_POSTS, ADD_POST, SET_LOAD_MORE_POSTS, DELETE_POST, UPDATE_POST } from "../actionsTypes/postsTypes";

const initialState = {
  posts: [],
  load: false,
  loadMore: true
};

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POSTS:
      return { ...state, posts: payload };

    case SET_LOAD_POSTS:
      return { ...state, load: payload };

    case ADD_POST:
      return {...state, posts: [...state.posts, payload]};

    case SET_LOAD_MORE_POSTS:
      return {...state, loadMore: payload}

    case UPDATE_POST:
      return {...state, posts: state.posts.map(el => el.id === payload.id ? payload : el)}

    case DELETE_POST: 
      return {...state, posts: state.posts.filter(el => el.id !== payload)}

    default:
      return state;
  }
};

export default postsReducer;
