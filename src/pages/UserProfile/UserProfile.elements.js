import styled from "styled-components";
import {fonts,colors} from '../../styles/theme'

export const Container = styled.View`
flex: 1;
justify-content: flex-start;
align-items: center;
`

export const TopContainer = styled.View`
height: 180px;
width: 180px;
justify-content: center;
align-items: center;
margin-top: 60px;
`


export const ProfileImg = styled.Image`
flex: 1;
`

export const UserImageContainer = styled.View`
height: 180px;
width: 180px;
border-radius: 90px;
`


export const UserName = styled.Text`
font-size: 24px;
font-family: ${fonts.header};
align-self: center;
`

export const UserEmail = styled.Text`
font-size: 18px;
font-family: ${fonts.text};
color: ${colors.container};
`


