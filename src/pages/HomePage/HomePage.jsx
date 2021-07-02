import { FlatList } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { Container, Title, TasksWrapper } from "./HomePage.elements";
import axios from "axios";
import { Posts } from "../../components/Posts/Posts";
import { PostsContext, usePosts } from "../../context/context";

export const HomePage = () => {
  const { posts, setPosts } = usePosts();
  return (
    <Container>
      <Title>Aqui está sua lista de postagens</Title>
      <FlatList
        data={posts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Posts id={item.id} body={item.body} title={item.title} />
        )}
      />
    </Container>
  );
};
