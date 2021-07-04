import React, {createContext, useState, useContext, useEffect} from 'react'
import axios from "axios"

export const PostsContext = createContext({})

export const PostsProvider = (props) => {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchResultsPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      setPosts(response.data);
    };


    fetchResultsPosts();
  }, []);


  return (
    <PostsContext.Provider value={{posts, setPosts}}>
      {props.children}
    </PostsContext.Provider>
  )
}

export const usePosts = () => useContext(PostsContext)