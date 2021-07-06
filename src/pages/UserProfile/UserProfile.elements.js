import styled from "styled-components";
import { fonts, colors } from "../../styles/theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #e0e0e0;
`;

export const TopContainer = styled.View`
  height: 300px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const ProfileImg = styled.Image`
  flex: 1;
`;

export const UserImageContainer = styled.View`
  height: 180px;
  width: 180px;
`;

export const UserName = styled.Text`
  font-size: 28px;
  font-family: ${fonts.header};
  align-self: center;
`;

export const UserEmail = styled.Text`
  font-size: 22px;
  font-family: ${fonts.text};
  color: ${colors.text};
`;

export const UserInfoHeaderContainer = styled.View`
  flex-direction: row;
`;

export const UserInfoBodyContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: space-around;
  border: 1px;
  border-color: rgba(0, 0, 0, 0.1);
`;

export const UserInfoContactEmailContainer = styled.View`
  flex-direction: row;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  width: 85%;
`;

export const EmailContainer = styled.View`
  flex-direction: column;
`;

export const EmailLink = styled.Text`
  font-family: ${fonts.text};
  font-size: 18px;
`;

export const ZipCode = styled.Text`
  font-family: ${fonts.text};
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
`;

export const WebsiteContainer = styled.View`
  flex-direction: row;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  width: 85%;
`;
