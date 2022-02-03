import styled from "styled-components";

export const Container = styled.View`
flex: 1;
background-color: ${props => props.bcolor || "#fff"};
`
export const SubContainer = styled.View`
padding: 10px;
background-color: #fff; 
margin-bottom: 10px;
`
export const AlamatContainer = styled.View`
background-color: #fff;
elevation: 5;
padding: 10px;
margin: 10px;
border-radius: 8px;
`
export const InputText = styled.TextInput`
border-radius: 8px;
border: ${props => props.bord || "0px solid  white"}
padding: 10px;
color: white;
`
export const Header = styled.View`
margin: 60px 10px 10px 10px;
flex-direction: row;
align-items: center;
background-color: rgba(245,245,245, 0.5);
padding: 0px 10px 0px 10px;
border-radius: 8px;
`
export const Top = styled.View`
flex-direction: row;
`
export const TopView = styled.View`
background-color: ${props => props.bcolor || "rgba(0,0,0, 0)"};
color: ${props => props.color || "#A7A7A7"};
padding: ${props => props.pad || "2px"};
display: ${props => props.dis || "flex"};
margin-right: 10px;
border-radius: 7px;
`
export const TopContainer = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
`
export const Textstyle = styled.Text`
color: ${props => props.color || "#A7A7A7"};
margin: ${props => props.mtop || "0px 0px 0px 0px"};
font-size: ${props => props.size || "14px"};
font-weight: ${props => props.weight || "normal"};
`
export const Body = styled.View`
margin-left: 10px;
`
export const BodyView = styled.View`
flex-direction: row;
width: 95%;
`
export const Images = styled.Image`
width: 20px;
height: 30px;
`
export const TambahAlamat = styled.View`
position: absolute;
bottom: 0px;
background-color: #fff;
align-self: center;
elevation: 5;
width: 100%;
padding: 15px;
`
export const TambahView = styled.View`
padding: 10px;
border: ${props => props.bord || "2px solid blue"};
width: 100%;
border-radius: 6px;
background-color: ${props => props.bcolor || "rgba(0,0,0, 0)"}
align-items: center;
`
export const InputForm = styled.TextInput`
border: 2px solid #C2D5FF;
padding: 13px;
border-radius: 8px;
margin: ${props => props.m || "0px"}
`
export const Toggles = styled.View`
margin-top: 20px;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
export const Toggel = styled.View`
background-color: #0033A0;
height: 20px;
padding: 1px;
justify-content: center; 
border-radius: 50px;
width: 40px;
`
export const Slider = styled.View`
width: 18px;
height: 18px;
align-self: ${props => props.aself || "auto"};
background-color: #fff;
border-radius: 200px
elevation: 2;
`
export const Pickers = styled.View`
border: 2px solid #C2D5FF;
border-radius: 8px; 
margin: 10px 0px 10px 0px;
`
export const MyLoc = styled.View`
flex-direction: row;
background-color: #EBF1FF;
padding: 10px;
margin-bottom: 10px;
border-radius: 4px;
`
export const Simpan = styled.View`
border: 2px solid #C2D5FF;
padding: 15px;
border-radius: 8px;
align-items: center;
margin-top: 8px;
`