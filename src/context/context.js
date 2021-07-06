import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const PostsContext = createContext({});

export const PostsProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchResultsPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      setPosts(response.data);
    };

    const fetchResultsUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    };
    fetchResultsPosts();
    fetchResultsUsers();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, setPosts, users, setUsers }}>
      {props.children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
