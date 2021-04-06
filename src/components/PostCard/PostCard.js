//react
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//actions
import { fetchDeletePost, fetchUpdatePost } from '../../store/asyncActions/postsAsyncActions'
//styles
import "./style.css";

const PostCard = ({  name, title, id, userId }) => {
  //state
  const [isOpenSettings, setIsOpeNSettigns] = useState(false);
  const [openUpdateMenu, setOpenUpdateMenu] = useState()
  const [toUpdate, setToUpdate] = useState({})
  
  //redux
  const dispatch = useDispatch()

  //router
  const history = useHistory();

  const goToPost = (id) => {

    history.push(`/post/${id}`);

  }

  const openSetting = () => setIsOpeNSettigns(!isOpenSettings);

  const openUpdate = () => setOpenUpdateMenu(!openUpdateMenu)

  const updatePost = (id) => {

    const obj = toUpdate

    obj.userId = userId

    const body = JSON.stringify(obj)

    dispatch(fetchUpdatePost(body, id))

    setToUpdate({})

    openSetting()

    openUpdate()

  }

  const deletePost = (id) => dispatch(fetchDeletePost(id))

  const onChange = (event) => {

    const { name, value } = event.target

    const obj = {}

    obj[name] = value

    setToUpdate({...toUpdate, ...obj})

  }


  return (
    <div className="post-card">
      <div onClick={() => goToPost(id)}>
        <p className="post-card-name">{name}</p>
        <p>{title}</p>
      </div>
      <button onClick={openSetting}>
        {isOpenSettings ? "Закрыть меню" : "Открыть меню"}
      </button>
      {isOpenSettings && !openUpdateMenu && (
        <div>
          <button onClick={openUpdate}>Редактировать</button>
          <button onClick={() => deletePost(id)}>Удалить</button>
        </div>
      )}
      {isOpenSettings && openUpdateMenu && (
        <div>
          <input onChange={onChange} name="title" placeholder="Заголовок" value={toUpdate.title || ""}/>
          <input onChange={onChange} name="body" placeholder="Пост" value={toUpdate.body || ""}/>
          <button onClick={() => updatePost(id)}>Сохранить</button>
          <button onClick={openUpdate}>Отмена</button>
        </div>
      )

      }
    </div>
  );
};

export default PostCard;
