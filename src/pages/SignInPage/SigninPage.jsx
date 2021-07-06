import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
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

export const SignInPage = () => {
  const { posts, setPosts } = usePosts();

  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  const handlePost = async () => {
    if (!title) return Alert.alert("Por favor, digite o título");

    if (!desc) return Alert.alert("Por favor, digite a descrição ");

    const obj = {
      title: title,
      body: desc,
      userId: 2,
      id: 103,
    };

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

      <SubmitButton onPress={handlePost}>
        <SubmitText>Adicionar</SubmitText>
      </SubmitButton>
    </Container>
  );
};
