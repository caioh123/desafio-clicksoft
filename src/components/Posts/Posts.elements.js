import styled from 'styled-components'
import { colors, fonts } from '../../styles/theme'


export const Container = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
min-width: 92%;
max-width: 93%;
`

export const ItemText = styled.Text`
font-size: 20px;
max-width: 93%;
`

export const Item = styled.View`
background-color: white;
padding: 15px;
border-radius: 10px;
align-items: center;
margin: 0 10px 20px 10px;
`

export const ItemContainer = styled.View`
flex-direction: row;
width: 100%;
align-items: center;
justify-content: space-between;
`

export const ItemHeader = styled.Text`
font-family: ${fonts.header};
font-size: 18px;
color: black;
flex-wrap: wrap;
max-width: 90%;
margin-bottom: 20px;
`

export const ItemBody = styled.View`
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`

export const Square = styled.View`
width: 24px;
height: 24px;
background-color: ${colors.squareColor};
opacity: 0.4;
border-radius: 10px;
margin-right: 15px;
`

