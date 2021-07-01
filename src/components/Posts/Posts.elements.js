import styled from 'styled-components'
import { colors, fonts } from '../../styles/theme'

export const Container = styled.View``

export const Item = styled.View`
background-color: white;
padding: 15px;
border-radius: 10px;
align-items: center;
margin-bottom: 20px;
`

export const ItemHeader = styled.Text`
font-family: ${fonts.header};
font-size: 18px;
color: black;
`

export const ItemLeft = styled.View`
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

export const ItemText = styled.Text`
font-size: 20px;
`
