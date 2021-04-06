//React
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions
import { fetchPosts } from "../../store/asyncActions/postsAsyncActions";
import { fetchUsers } from "../../store/asyncActions/usersAsyncActions";
//coponents
import PostCard from "../../components/PostCard/PostCard";
import PaginationButton from "../../components/PaginationButton/PaginationButton";
import AddPostForm from "../../components/AddPostForm/AddPostForm";
//styles
import "./style.css";

const Posts = () => {
  //state
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [firstFetch, setFirstFetch] = useState(true);

  //redux
  const dispatch = useDispatch();
  const { posts, load, loadMore } = useSelector((state) => state.postsReducer);
  const { users } = useSelector((state) => state.usersReducer);

  useEffect(() => {

    firstFetch && dispatch(fetchUsers());

    firstFetch && dispatch(fetchPosts(page));

    setFirstFetch(false);

    !isFilter && setData(posts);

  }, [page, users, posts, data, isFilter]);

  const onChange = (event) => {

    const { value } = event.target;

    filterArray(value);

  };

  const filterArray = (value) => {

    if (value) {

      const nameToLowerCase = value.toLowerCase();

      const newUsersArray = users.filter((el) => {

        const userName = el.name.toLowerCase();

        if (userName.indexOf(nameToLowerCase) !== -1) return el;

      });

      const newPostsArray = [];

      newUsersArray.forEach(({ id }) => {

        const results = posts.filter((el) => el.userId === id);

        results.length > 0 && newPostsArray.push(...results);

      });

      setData(newPostsArray);

      setIsFilter(true);

    } else if (value === "") {

      setData(posts);

      setIsFilter(false);
    }
  };

  const nextPage = () => {

      dispatch(fetchPosts(page + 1));

      setPage(page + 1);

  };

  const prevPage = () => {

    if (page !== 1) {

      dispatch(fetchPosts(page - 1));

      setPage(page - 1);

    } else return;
  };

  const findUserById = (userId) => users?.find(({ id }) => id === userId)?.name;

  return (
    <div className="container">
      <div>
        <input onChange={onChange} placeholder="Введите имя" />
        <div>
          <AddPostForm />
        </div>
      </div>
      {data.length > 0 ? (
        <div className="posts-cards-container">
          {!load ? (
            data?.map(({ id, title, userId }) => (
              <PostCard
                key={id}
                name={findUserById(userId)}
                title={title}
                id={id}
                userId={userId}
              />
            ))
          ) : (
            <p>Загрузка...</p>
          )}
        </div>
      ) : (
        <p className="posts-end">Ничего нету</p>
      )}
      {!isFilter ? (
        <div className="posts-pagination">
          {page >= 2 && <PaginationButton action={prevPage} text="prev" />}
          {loadMore && <PaginationButton action={nextPage} text="next" />}
        </div>
      ) : undefined}
    </div>
  );
};

export default Posts;
