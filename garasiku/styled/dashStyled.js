import styled from "styled-components";
export const Container = styled.View`
flex: 1;
`

export const Header = styled.ImageBackground`
padding: 30px 15px 30px 15px;
flex-direction: row;
border-radius: 20px;
justify-content: space-between;
`
export const Profile = styled.View`
flex-direction: row;
`
export const TxtDash = styled.Text`
background-color: blue;
width: 55px;
font-size: 20px;
color: #fff;
font-weight: bold;
padding: 12px;
text-align: center;
border-radius: 5px;
justify-content: center;
`
export const Level = styled.View`
flex-direction: row;
align-items: center;
`
export const Name = styled.View`
flex-direction: column;
margin-left: 10px; 
`
export const TxtName = styled.Text`
font-size: ${props => props.size || "22px"};
font-weight: ${props => props.weight || "bold"};
color: ${props => props.color || "#fff"};
`
export const Poin = styled.View`
background-color: rgba(0,0,0, 0.15)
flex-direction: row;
align-items: center;
border-radius: 20px;
margin-right: 10px;
padding: 0px 7px 0px 0px;
`
export const RefContainer = styled.View`
background-color: #fff;
elevation: 5
padding: 10px;
border-radius: 7px;
margin: -40px 15px 0px 15px;
flex-direction: row;
justify-content: space-between;
`
export const RefPoin = styled.View`
flex-direction: row;
align-items: center;
`
export const ViewRefPoin = styled.View`
margin-left: 10px;
`
export const RiwayatContainer = styled.View`
padding: 15px 15px 0px 15px;
`
export const BoxRiwayat = styled.View`
background-color: #fff;
elevation: 5;
border-radius: 7px;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 15px;
margin-top: 15px;
`
export const IconTxt = styled.View`
align-items: center;
margin-top: ${props => props.inputM || "0px"}
`
export const KuponContainer = styled.View`
padding: 15px 15px 0px 15px;
`
export const EmptyKupon = styled.View`
border: 2px dashed #C2D5FF;
padding: 15px;
align-items: center;
margin: 10px 0px 0px 0px;
`
export const AddContainer = styled.ImageBackground`
margin: 15px 0px 0px 0px;
padding: 15px;
`
export const AddVehicle = styled.Text`
border: 2px dashed #C2D5FF;
padding: 15px;
color: #fff;
font-size: 16px;
font-weight: 700;
text-align: center;
margin: 10px 0px 0px 0px;
`
export const TextAdd = styled.View`
flex-direction: row;
`