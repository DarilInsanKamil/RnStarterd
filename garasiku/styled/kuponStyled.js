import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: ${props => props.inputBackground || "#fff"}
`
//Styling untuk list kupon
export const ListKupon = styled.View`
background-color: #fff;
elevation: 5;
margin: 7px 15px 8px 15px;
border-radius: 10px;
justify-content: space-evenly;
padding: 20px 10px 10px 10px;
`
export const KuponContent = styled.View`
flex-direction: row;
justify-content: space-evenly;
`
export const KodeKupon = styled.View`
border: 2px dashed #C2D5FF;
align-items: center;
padding: 10px;
margin: 15px 10px 5px 10px;
`
export const Txt = styled.Text`
font-weight: ${props => props.inputWeight || "normal"};
color: ${props => props.inputColor || "#313131"}; 
font-size: ${props => props.inputSize || "14px"};
margin-top: ${props => props.marginTop || "0px"};
`
export const Icons = styled.View`
justify-content: space-around;
align-items: center;
`
export const ExpTrans = styled.View`
justify-content: space-around;
`
export const Images = styled.Image`
width: 100%;
height: 200px;
`
//Styling untuk detail kupon
export const DetailsKupon = styled.View`
padding: 15px;
background-color: #fff;
`
export const Title = styled.Text`
font-size: 22px;
font-weight: 700;
color: black;
`
export const IconsDetail = styled.View`
flex-direction: row;
align-items: center;
width: 85%;
justify-content: space-around;
margin-top: 10px;
`
export const Expires = styled.View`
flex-direction: column;
`
export const Sketentuan = styled.View`
background-color: #fff;
margin: 10px 0px 0px 0px;
padding: 20px;
height: 1000px;
`
export const ButtonKlaim = styled.View`
padding: 15px;
background-color: #0033A0;
align-items: center;
border-radius: 5px;
`
export const TxtSk = styled.Text`
margin: 5px 0px 5px 0px;
text-align: justify;
font-size: 15px;
`
export const Touchable = styled.View`
background-color: #fff;
elevation: 10;
position: absolute;
bottom: 0px;
width: 100%;
box-shadow: 0px -10px 5px black;
padding: 20px 15px 15px 15px;
border: 0.5px solid rgba(0, 0, 0, 0.3);
`