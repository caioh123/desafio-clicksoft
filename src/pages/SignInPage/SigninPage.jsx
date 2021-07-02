import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import axios from "axios";

export const SignInPage = () => {
  const handlePost = async () => {
    const obj = { title: "caio", body: "fazendo código", userId: 1 };
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      obj
    );

    console.log(response.data);
  };
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Button title="pressione" onPress={handlePost} />
    </View>
  );
};
