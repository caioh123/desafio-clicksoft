import React, { useState } from "react";
import {
  Item,
  ItemHeader,
  ItemBody,
  ItemText,
  ItemContainer,
  Square,
  Container,
  DeleteButton,
} from "./Posts.elements";
import { AntDesign, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { colors } from "../../styles/theme";
import { usePosts } from "../../context/context";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";

const LongText = ({ content, limit }) => {
  const [showAll, setShowAll] = useState(false);

  const toggle = () => setShowAll(!showAll);

  if (content.length <= limit) {
    return (
      <Container>
        <ItemText>{content}</ItemText>
      </Container>
    );
  }
  if (showAll) {
    return (
      <Container>
        <ItemText onPress={toggle}>{content}</ItemText>
        {showAll ? (
          <AntDesign name="caretup" size={24} color={colors.container} />
        ) : (
          <AntDesign name="caretdown" size={24} color={colors.container} />
        )}
      </Container>
    );
  }

  const toShow = content.substring(0, limit) + "...";
  return (
    <Container>
      <ItemText onPress={toggle}>{toShow}</ItemText>
      {showAll ? (
        <AntDesign name="caretup" size={24} color={colors.container} />
      ) : (
        <AntDesign name="caretdown" size={24} color={colors.container} />
      )}
    </Container>
  );
};

export const Posts = ({ body, title, id, userId }) => {
  const navigation = useNavigation();

  const getUser = (id) => {
    const user = users.filter((user) => user.id === id);
    navigation.navigate("UserProfile", {
      user: user[0],
    });
  };

  const handleUser = (postId) => {
    navigation.navigate("UserProfile");
  };

  const { posts, setPosts, users, setUsers } = usePosts();

  const handleDelete = async (postId) => {
    const filteredPost = posts.filter((p) => p.id !== postId);

    setPosts(filteredPost);

    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  };

  return (
    <Item>
      <ItemContainer>
        <ItemHeader onPress={() => getUser(userId)}>{title}</ItemHeader>
        <DeleteButton onPress={() => handleDelete(id)}>
          <FontAwesome
            style={{ marginBottom: 15 }}
            name="remove"
            size={40}
            color={colors.danger}
          />
        </DeleteButton>
      </ItemContainer>
      <ItemBody>
        <LongText content={body} limit={60} />
      </ItemBody>
    </Item>
  );
};
