import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: #fff;
`
export const SubContainer = styled.View`
padding: 15px;
`
export const Button = styled.View`
align-self: center;
width: 100%;
position: absolute;
bottom: 0px;
elevation: 5;
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
export const Render = styled.View`
background-color: #fff;
margin: 10px;
border-radius: 8px;
elevation: 5;
`
export const Status = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
`
export const StatusTotal = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px;
`
export const Images = styled.View`
flex-direction: row;
margin: 10px 0px 10px 0px;
`
export const Separator = styled.View`
height: 1px;
background-color: #EEE;
`
export const Log = styled.View`
border: ${props => props.bord || "none"}
padding: 6px 8px 6px 8px;
border-radius: 5px;
background-color: ${props => props.bcolor || "rgba(0,0,0, 0)"}
`
export const Tooltip = styled.View`
background-color: #FFF7C2;
padding: 10px;
display: ${props => props.dis || "flex"};
position: absolute;
width: 100%;
align-self: center;
top: 10px;
border-radius: 6px;
elevation: 2;
`
export const FlatSub = styled.View`
padding: 15px;
` 
export const ImageItem = styled.Image`
margin-right: 5px;
`