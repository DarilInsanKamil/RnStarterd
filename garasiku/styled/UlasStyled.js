import styled from "styled-components";

export const Container = styled.View`
flex: 1;
background-color: #fff;
`
export const Render = styled.View`
flex-direction: ${props => props.jc || "row"};
background-color: #fff;
elevation: 5;
border-radius: ${props => props.bradius || "8px"};
padding: 10px;
margin: 10px;
`
export const Images = styled.Image`
border-radius: 6px;
`
export const Textstyle = styled.Text`
color: ${props => props.color || "#92979F"};
font-size: ${props => props.size || "14px"};
font-weight: ${props => props.weight || "400"};
`
export const TextContent = styled.View`
margin: 0px 0px 0px 10px;
justify-content: space-evenly;
flex: 1;
`
export const Tambah = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
`
export const Button = styled.View`
border: 2px solid #0033A0;
padding: 5px;
border-radius: 8px;
`
export const ButtonSave = styled.View`
border: 2px solid #0033A0;
padding: 10px;
align-items: center;
border-radius: 4px;
`
export const Detail = styled.View`
padding: 10px;
flex-direction: row;
`
export const Sep = styled.View`
height: 0.9px;
width: 100%;
margin: 10px;
align-self: center;
background-color: #E4E4E4
`
export const FormUlasan = styled.View`
padding: 10px;
`
export const InputText = styled.View`
border: 2px solid #C2D5FF;
border-radius: 2px;
margin: 10px 0px 10px 0px;
`
export const TambahFoto = styled.View`
flex-direction: row;
margin-top: 10px;
`
export const ButtonFoto = styled.View`
border: 2px dashed #0033A0;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 4px;
margin-left: 10px;
`
export const SimpanUlasan = styled.View`
background-color: #fff;
padding: 10px;
position: absolute;
bottom: 0px;
elevation: 5;
width: 100%;
`
export const RenderDone = styled.View`
background-color: #fff;
padding: 10px;
margin: 10px;
justify-content: space-between;
elevation: 5;
border-radius: 4px
`
export const TxtDone = styled.View`
justify-content: space-between;
flex-direction: row;
`
export const ItemRate = styled.View`
align-items: flex-end;
`
export const ImagesContent = styled.View`
flex-direction: row;
width: 35%;
margin-top: 10px;
justify-content: space-between;
`