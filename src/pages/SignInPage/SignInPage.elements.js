import styled from "styled-components"
import {fonts, colors} from "../../styles/theme"

export const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`

export const Title = styled.Text`
font-size: 24px;
color: black;
font-family: ${fonts.header};
margin-bottom: 20px;
`

export const SubmitText = styled.Text`
font-size: 20px;
color: white;
font-family: ${fonts.text};
`

export const InputContainer = styled.View`
align-items: center;
justify-content: center;
`

export const TitleInput = styled.TextInput`
border: 1px;
border-color: #CFCFCF;
color: white;
width: 300px;
font-size: 18px;
margin-bottom: 50px;
padding: 10px;
 text-align: center;
 background-color: 	#D3D3D3; 
 border-radius: 10px;
`

export const SubmitButton = styled.TouchableOpacity`
background-color: ${colors.container};
justify-content: center;
align-items: center;
border-radius: 16px;
margin-bottom: 10px;
height: 56px;
width: 150px;

`