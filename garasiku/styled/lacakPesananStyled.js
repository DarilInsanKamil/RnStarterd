import styled from "styled-components";

export const Container = styled.View`
flex: 1;
background-color: #fff;
`
export const SubContainer = styled.View`
padding: 15px;
`
export const Button = styled.View`
position: absolute;
align-self: center;
width: 100%;
bottom: 0px;
elevation: 2;
padding: 15px;
`
export const Textstyle = styled.Text`
font-size: ${props => props.size || "16px"};
color: ${props => props.colors|| "#000"};
font-weight: ${props => props.weight || "normal"};
`
export const InputText = styled.TextInput`
border: 2px solid #C2D5FF;
margin-top: 10px;
border-radius: 6px;
padding: 10px;
`
export const ButtonLacak = styled.View` 
align-items: center;
background-color: ${props => props.bcolor || "#BCBCBC"};
width: 100%;
padding: 15px;
border-radius: 6px;
`