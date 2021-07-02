import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import axios from "axios";
import { usePosts } from "../../context/context";

export const SignInPage = () => {
  const { posts, setPosts } = usePosts();

  const handlePost = async () => {
    const obj = { title: "caio", body: "fazendo código", userId: 1 };
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts/",
      obj
    );

    const postList = [data, ...posts];
    setPosts(postList);
  };
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Button title="pressione" onPress={handlePost} />
    </View>
  );
};
