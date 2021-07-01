import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import {
  Item,
  ItemHeader,
  ItemLeft,
  ItemText,
  Square,
  Container,
} from "./Posts.elements";

const LongText = ({ content, limit }) => {
  const [showAll, setShowAll] = useState(false);

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);

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
        <ItemText onPress={showLess}>{content}</ItemText>
      </Container>
    );
  }

  const toShow = content.substring(0, limit) + "...";
  return (
    <Container onPress={showMore}>
      <ItemText onPress={showMore}>{toShow}</ItemText>
    </Container>
  );
};

export const Posts = (props) => {
  return (
    <Item>
      <ItemHeader>
        <ItemHeader>{props.title}</ItemHeader>
      </ItemHeader>
      <ItemLeft>
        <LongText content={props.body} limit={60} />
      </ItemLeft>
    </Item>
  );
};
