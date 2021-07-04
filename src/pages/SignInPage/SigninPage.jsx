import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import axios from "axios";
import { usePosts } from "../../context/context";
import {
  Container,
  Title,
  TitleInput,
  InputContainer,
  SubmitButton,
  SubmitText,
} from "./SignInPage.elements";
import { uuid } from "uuid";

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

export const SignInPage = () => {
  const { posts, setPosts } = usePosts();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handlePost = async () => {
    const obj = {
      title: title,
      body: desc,
      userId: generateRandomNumber(100, 100000),
      id: 103,
    };

    console.log(obj);

    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts/",
      obj
    );

    const postList = [data, ...posts];
    setPosts(postList);
  };

  const handleInputTitleChange = (value) => {
    setTitle(value);
  };

  const handleInputDescChange = (value) => {
    setDesc(value);
  };
  return (
    <Container>
      <Title>Adicione sua postagem</Title>
      <InputContainer>
        <TitleInput
          onChangeText={handleInputTitleChange}
          placeholder="Titulo"
        />
        <TitleInput
          onChangeText={handleInputDescChange}
          placeholder="Descrição"
        />
      </InputContainer>

      <SubmitButton>
        <SubmitText onPress={handlePost}>Adicionar</SubmitText>
      </SubmitButton>
    </Container>
  );
};
