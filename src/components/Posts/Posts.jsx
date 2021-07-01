import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import {
  Item,
  ItemHeader,
  ItemBody,
  ItemText,
  ItemContainer,
  Square,
  Container,
} from "./Posts.elements";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../styles/theme";

const LongText = ({ content, limit }) => {
  const [showAll, setShowAll] = useState(false);

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);

  const toggle = () => setShowAll(!showAll);

  if (content.length <= limit) {
    return (
      <Container>
        <ItemText>{content}</ItemText>
        {showAll ? (
          <AntDesign name="caretup" size={24} color={colors.container} />
        ) : (
          <AntDesign name="caretdown" size={24} color={colors.container} />
        )}
      </Container>
    );
  }
  if (showAll) {
    return (
      <Container>
        <ItemText onPress={showLess}>{content}</ItemText>
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
    <Container onPress={showMore}>
      <ItemText onPress={showMore}>{toShow}</ItemText>
      {showAll ? (
        <AntDesign name="caretup" size={24} color={colors.container} />
      ) : (
        <AntDesign name="caretdown" size={24} color={colors.container} />
      )}
    </Container>
  );
};

export const Posts = (props) => {
  return (
    <Item>
      <ItemContainer>
        <ItemHeader>{props.title}</ItemHeader>
        <MaterialIcons
          style={{ marginBottom: 15 }}
          name="dangerous"
          size={40}
          color={colors.danger}
        />
      </ItemContainer>
      <ItemBody>
        <LongText content={props.body} limit={60} />
      </ItemBody>
    </Item>
  );
};
