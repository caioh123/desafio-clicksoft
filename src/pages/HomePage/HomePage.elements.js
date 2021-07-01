import styled from "styled-components"
import {fonts, colors} from "../../styles/theme"



export const Container = styled.View`
flex: 1;
background-color: ${colors.container};
justify-content: center;
`
export const TasksWrapper = styled.View`
padding-top: 80;
padding-left: 20;
padding-right: 20;
`

export const Title = styled.Text`
color: white;
font-size: 22px;
font-family: ${fonts.header};
padding-top: 60px;
margin-bottom: 20px;
align-self: center;
`

export const SectionTitle = styled.Text`
font-size: 24;
font-family: ${fonts.text}
`