import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Container, Title } from "./HomePage.elements";
import axios from "axios";

export const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchResult = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      setPosts(response.data);
    };

    fetchResult();
  }, []);

  return (
    <Container>
      <Title>Aqui está sua lista de postagens</Title>
      <FlatList
        data={posts}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Title>{item.title}</Title>}
      />
    </Container>
  );
};
