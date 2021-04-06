//actions
import { getPosts, setLoad, addPost, loadMore, updatePost, deletePost } from "../actions/postsActions";

export const fetchPosts = (page) => {

  return async (dispatch) => {

    dispatch(setLoad(true));

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/?_page=${page}&_limit=20`
    );

    const data = await res.json();

    data?.length > 0 ? dispatch(loadMore(true)) : dispatch(loadMore(false))

    dispatch(getPosts(data))

    dispatch(setLoad(false));
  };
};

export const fetchAddPost = (data) => {

  return async (dispatch) => {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: data,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const newPost = await res.json();

    if(newPost) dispatch(addPost(newPost))

  };
};

export const fetchUpdatePost = (data, id) => {
    return async (dispatch) => {
        
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "PUT",
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        const upd = await res.json()

        dispatch(updatePost(upd))
    }
}


export const fetchDeletePost = (id) => {

    return (dispatch) => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' })

        dispatch(deletePost(id))
    }
}