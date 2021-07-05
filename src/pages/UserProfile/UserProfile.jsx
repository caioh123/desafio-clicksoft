import React from "react";
import {
  Container,
  UserName,
  TopContainer,
  ProfileImg,
  UserImageContainer,
  UserEmail,
} from "./UserProfile.elements";
import { useRoute } from "@react-navigation/core";

export const UserProfile = () => {
  const routes = useRoute();

  const { user } = routes.params;

  console.log(user[0]);

  return (
    <Container>
      <TopContainer>
        <UserImageContainer>
          <ProfileImg
            source={{
              uri: "https://forum.truckersmp.com/uploads/monthly_2021_04/imported-photo-263413.thumb.png.e4d4062fa72a70e989ab2fb6755c9823.png",
            }}
          />
        </UserImageContainer>
        <UserName>{user.name}</UserName>
        <UserEmail>{user.email}</UserEmail>
      </TopContainer>
    </Container>
  );
};
