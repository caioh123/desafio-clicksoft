import React, {createContext, useState, useContext, useEffect} from 'react'
import axios from "axios"

export const PostsContext = createContext({})

export const PostsProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([])
  const [items, setItems] = useState([])


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
        )

      setUsers(response.data)     
      
    }

    fetchResultsPosts();
    fetchResultsUsers()

    // const obj = [...users ,...posts]

    // setItems(obj)

    

  }, []);


  // console.log(posts[0].id)

  // const result = posts.map(post => (
  //   post.id
  // ))

  // console.log(result)


  // const result = posts.map(post => {
  //   const user = users.find(user => user.id == post.userId)
  //   return { ...user, ...post }
  // })
  // console.log('result', result)

  // setItems(result);
  

  return (
    <PostsContext.Provider value={{posts, setPosts, users, setUsers, items}}>
      {props.children}
    </PostsContext.Provider>
  )
}

export const usePosts = () => useContext(PostsContext)