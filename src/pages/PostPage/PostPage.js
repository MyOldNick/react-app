//react
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PostPage = () => {
  //state
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  const [newComment, setnewComment] = useState({});
  //router
  const { id } = useParams();
  //redux
  const { posts } = useSelector((state) => state.postsReducer);

  useEffect(() => {

    !post && setPost(posts.find((el) => el.id === +id));

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((res) => res.json())
      .then((res) => setComments(res));

  }, [posts, post]);

  const onChange = (event) => {

    const { value, name } = event.target;

    const obj = {}

    obj[name] = value

    obj.id = new Date().getTime()

    setnewComment({...newComment, ...obj})

  };

  const addComment = () => {
      setComments([...comments, newComment])

      setnewComment({})
  }

  return (
    <div className="container">
      <h3>{post?.title}</h3>
      <p>{post?.body}</p>
      <hr />
      {comments?.map(({ id, name, body }) => (
        <div key={id}>
          <h5>{name}</h5>
          <p>{body}</p>
        </div>
      ))}
      <hr/>
      <div>
          <p>Добавить новый коммент</p>
        <input onChange={onChange} name="name" placeholder="Заголовок"  value={newComment.name || ""}/>
        <input onChange={onChange} name="body" placeholder="Текст" value={newComment.body || ""}/>
        <button onClick={addComment}>Добавить</button>
      </div>
    </div>
  );
};

export default PostPage;
