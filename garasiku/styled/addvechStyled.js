import styled from "styled-components";


export const Container = styled.View`
flex: 1;
background-color: #fff;
`
export const SubContainer = styled.View`
padding: 15px;
margin-bottom: 70px;
`

export const ButtonConteiner = styled.View`
flex-direction: row;
position: absolute;
bottom: 0px;
width: 100%;
justify-content: space-around;
align-self: center;
elevation: 3;
background-color: #fff;
padding: 20px 15px 15px 15px;
`
export const Button = styled.View`
background-color: ${props => props.bcolor || "#fff"}
border: ${props => props.bord || "none"}
border-radius: 7px;
padding: 7px;
width: 40%;
align-items: center;
`
export const Pick = styled.View`
border: 2px solid #C2D5FF;
border-radius: 10px;
margin: 10px 0px 10px 0px;
`
export const TextButton = styled.Text`
color: ${props => props.color || "#4782FF"};
font-weight: ${props => props.weight || "600"};
font-size: ${props => props.size || "20px"};
margin: ${props => props.mtop || "0px 0px 0px 0px"};
`
export const Textlabel = styled.Text`
font-weight: 700;
`
export const BorDash = styled.View`
border: ${props => props.border || "2px dashed #fff"};
background-color: ${props => props.bcolor || "rgba(0,0,0, 0)"};
padding: ${props => props.pad || "10px"};
width: ${props => props.wide || "100%"}
align-items: center;
margin-top: 10px; 
border-radius: 8px;
`
// #FFF7C2

export const Box = styled.TouchableOpacity`
flex-direction: row;
border-radius: 8px;
padding: 10px;
justify-content: space-around;
align-items: center;
margin: 10px 5px 5px 5px; 
`
export const NamaKen = styled.View`
margin-left: 10px;
`
export const Edit = styled.View`
background-color: #fff;
padding: 5px 10px 5px 10px;
border-radius: 5px;
border: 2px solid #0033A0;
`
export const RadioButton = styled.View`
border: 1px solid #C2D5FF;
width: 15px; 
padding: 10px;
border-radius: 10px;
height: 15px; 
align-items: center;
background-color: #fff;
justify-content: center;
`
export const Hole = styled.View`
background-color: #0033A0;
border-radius: 10px;
width: 10px;
height: 10px;
`
export const InputText = styled.TextInput`
border: 1px solid #f3f3;
padding: 15px;
background-color: #fff;
border-radius: 8px;
margin: 10px 5px 10px 5px;
`
export const SearchVech = styled.View`
flex-direction: row;
width: 100%;
justify-content: space-around;
align-items: center;
`
export const Delete = styled.View`
background-color: red;
align-items: center;
justify-content: center;
width: 20px;
border-radius: 3px;
height: 20px;
position: absolute;
left: -5px;
top: -5px;
`
export const Background = styled.ImageBackground`
flex: 1
`