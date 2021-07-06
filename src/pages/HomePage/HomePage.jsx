import { FlatList } from "react-native";
import React from "react";
import { Container, Title } from "./HomePage.elements";
import { Posts } from "../../components/Posts/Posts";
import { usePosts } from "../../context/context";

export const HomePage = () => {
  const { posts } = usePosts();

  return (
    <Container>
      <Title>Aqui está sua lista de postagens</Title>
      <FlatList
        data={posts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Posts
            userId={item.userId}
            id={item.id}
            body={item.body}
            title={item.title}
          />
        )}
      />
    </Container>
  );
};
