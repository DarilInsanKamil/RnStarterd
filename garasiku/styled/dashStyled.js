import styled from "styled-components";

export const Container = styled.View`
flex: 1;
background-color: #fff;
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
width: 48px;
font-size: 16px;
color: #fff;
font-weight: bold;
padding: 12px;
text-align: center;
border-radius: 8px;
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
margin-bottom: ${props => props.mbtm || "0px"};
`
export const SeeAll = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
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
justify-content: space-around;
`
export const RefPoin = styled.View`
flex-direction: row;
align-items: center;
width: 45%;
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
border: ${props => props.borders || "none"};
padding: 10px;
color: ${props => props.color || "#fff"};
background-color: ${props => props.bcolor || "rgba(0,0,0, 0.0)"}
font-size: 16px;
font-weight: 700;
text-align: center;
margin: 10px 0px 0px 0px;
border-radius: 5px;
`
export const TextAdd = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
`
export const TxtFeat = styled.Text`
width: 60%;
color: #fff;
font-size: 12px;
`
export const OtherContainer = styled.View`
margin: 5px 0px 10px 0px;
`
export const Others= styled.View`
flex-direction: row;
padding: 15px;
align-items: center;
justify-content: space-between;
border-bottom-width: 0.2px;
border-color: #C2D5FF;
`
export const FlatKupon = styled.View`
margin: 5px 0px 0px 5px;
width: 200px;
padding: 10px 0px 10px 0px;
border-radius: 8px;
`
export const MyVoucher = styled.View`
flex-direction: row;
margin: 10px 0px 0px 0px;
border: 1px dashed #C2D5FF;
padding: 5px;
border-radius: 8px;
align-items: center;
justify-content: space-around;
`
export const Txtkupon = styled.Text`
margin-left: ${props => props.mleft || "0px"};
`
export const IconLoc = styled.View`
margin-left: ${props => props.mleft || "0px"};
flex-direction: row;
align-items: center;
`
export const VoucherContiner = styled.View`
margin-left: 10px;
`