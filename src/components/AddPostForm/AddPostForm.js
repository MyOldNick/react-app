//React
import React, { useState } from "react";
import { useDispatch } from "react-redux";
//actions
import { fetchAddPost } from '../../store/asyncActions/postsAsyncActions'

const AddPostForm = () => {
  //state
  const [newPost, setNewPost] = useState({});
  //redux
  const dispatch = useDispatch();

  const onChange = (event) => {

    const { name, value } = event.target;

    const obj = {}

    obj[name] = value

    obj.userId = 1

    setNewPost({...newPost, ...obj})

  };

  const createNewPost = () => {
    const json = JSON.stringify(newPost)

    dispatch(fetchAddPost(json));

    setNewPost({});
  };

  return (
    <div>
      <p>Добавить новый пост</p>
      <input onChange={onChange} name="title" placeholder="Заголовок"  value={newPost.title || ''}/>
      <input onChange={onChange} name="body" placeholder="Текст" value={newPost.body || ''} />
      <button onClick={createNewPost}>Добавить пост</button>
    </div>
  );
};

export default AddPostForm;
