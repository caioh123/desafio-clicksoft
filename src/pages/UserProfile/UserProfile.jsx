import React from "react";
import {
  Container,
  UserName,
  TopContainer,
  ProfileImg,
  UserImageContainer,
  UserEmail,
  UserInfoHeaderContainer,
  UserInfoBodyContainer,
  UserInfoContactEmailContainer,
  EmailLink,
  EmailContainer,
  ZipCode,
  WebsiteContainer,
} from "./UserProfile.elements";
import { useRoute } from "@react-navigation/core";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  Foundation,
} from "@expo/vector-icons";

export const UserProfile = () => {
  const routes = useRoute();

  const { user } = routes.params;

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
        <UserInfoHeaderContainer>
          <Feather
            style={{ marginRight: 10 }}
            name="map-pin"
            size={30}
            color="black"
          />
          <UserEmail>{user.address.street}, </UserEmail>
          <UserEmail>{user.address.city}</UserEmail>
        </UserInfoHeaderContainer>
      </TopContainer>
      <UserInfoBodyContainer>
        <Feather name="phone" size={30} color="black" />
        <UserEmail>{user.phone}</UserEmail>
        <MaterialCommunityIcons
          name="android-messages"
          size={30}
          color="black"
        />
      </UserInfoBodyContainer>
      <UserInfoContactEmailContainer>
        <MaterialIcons name="alternate-email" size={30} color="black" />
        <EmailContainer>
          <EmailLink>{user.email}</EmailLink>
          <ZipCode>{user.address.zipcode}</ZipCode>
        </EmailContainer>
      </UserInfoContactEmailContainer>
      <WebsiteContainer>
        <Foundation name="web" size={30} color="black" />
        <EmailLink>{user.website}</EmailLink>
      </WebsiteContainer>
    </Container>
  );
};
