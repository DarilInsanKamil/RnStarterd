import styled from "styled-components";

export const Container = styled.View`
flex: 1;
`
export const Render = styled.View`
flex-direction: row;
background-color: #fff;
elevation: 5;
margin: 10px;
border-radius: 8px;
`
export const Images = styled.Image`
margin-right: 5px;
`
export const TextContent = styled.View`
padding: 10px;
width: 100%;
`
export const Progbar = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 70%;
`
export const Progress = styled.View`
background-color: rgba(0,0,0, 0.2);
height: 4px;
padding: 2px;
width: 55%;
justify-content: center;
`
export const Fill = styled.View`
background-color: #464646;
height: 4px;
width: ${props => props.wid || "10px"}
`
export const Fav = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 70%;
`
export const Rating = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 70%;
`
export const Textstyle = styled.Text`
font-size: ${props => props.size || "12px"};
font-weight: ${props => props.weight || "normal"};
color: ${props => props.color || "#464646"};
text-decoration: ${props => props.textd || "none"}
`
export const Diskon = styled.View`
padding: 0px 4px 0px 4px;
background-color: #DD3556;
border-radius: 4px;
margin: 0px 5px 0px 0px;
`
export const FavDiskon = styled.View`
flex-direction: row;
align-items: center;
margin-top: 5px;
`