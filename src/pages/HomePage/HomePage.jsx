import { FlatList } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { Container, Title, TasksWrapper } from "./HomePage.elements";
import axios from "axios";
import { Posts } from "../../components/Posts/Posts";
import { AuthContext, useAuth } from "../../context/context";

export const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const { user, setUser } = useAuth();

  useEffect(() => {
    const fetchResult = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      setPosts(response.data);
    };

    fetchResult();
    console.log(user);
  }, []);

  return (
    <Container>
      <Title>Aqui está sua lista de postagens</Title>
      <FlatList
        data={posts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Posts body={item.body} title={item.title} />}
      />
    </Container>
  );
};
