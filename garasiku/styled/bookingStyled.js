import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
flex: 1;
background-color: #fff;
`
export const Header = styled.View`
margin: 60px 10px 10px 10px;
flex-direction: row;
background-color: rgba(245,245,245, 0.6);
border-radius: 4px;
align-items: center;
padding: 0px 10px 0px 10px;
`
export const InputText = styled.TextInput`
color: #fff;
margin-left: 10px
`
export const TidakPesan = styled.View`
align-self: center;
margin: 38px 0px 0px 0px;
`
export const Images = styled.Image`
align-self: ${props => props.aself || "center"};
margin: 0px 0px 10px 0px;
resize-mode: cover;
`
export const NotFound = styled.View`
flex-direction: row;
align-items: center;
margin: 10px;
`
export const TextContent = styled.View`
`
export const Icons = styled.Image`
margin-right: ${props => props.mr || "7px"};
`
export const Texts = styled.Text`
font-size: ${props => props.size || "12px"};
font-weight: ${props => props.weight || "700"};
color: ${props => props.color || "rgba(70, 70, 70, 1)"};
`
export const Box = styled.View`
flex-direction: row;
margin: 10px 0px 0px 0px;
border: 1px dashed #C2D5FF;
padding: 5px;
border-radius: 8px;
align-items: center;
justify-content: space-around;
`
export const Icontxt = styled.View`
margin-left: ${props => props.mleft || "0px"};
flex-direction: row;
align-items: center;
`
export const ContainerDetail = styled.View`
flex: 1;
background-color: rgba(235, 241, 255, 1);
`
export const ImageDetail = styled.Image`
width: 100%;
`
export const DetailText = styled.View`
background-color: #fff;
padding: 20px 15px 20px 15px;
`
export const Rate = styled.View`
flex-direction: row;
align-items: center;
margin-left: -5px;
`
export const Jadwal = styled.View`
background-color: #fff;
padding: 15px;
margin: 2px 0px 2px 0px;
text-align: center;
`
export const Tanggal = styled.View`
background-color: rgba(235, 241, 255, 1);
padding: 10px;
align-items: center;
border-radius: 4px;
flex-direction: row;
`
export const Syarat = styled.View`
padding: 15px 15px 100px 15px;
background-color: #fff;
`
export const Kode = styled.View`
position: absolute;
bottom: 0px;
padding: 15px;
width: 100%;
background-color: rgba(0, 51, 160, 1);
`
export const Nokode = styled.View`
background-color: #fff;
flex-direction: row;
width: 100%;
padding: 10px;
margin-top: 5px;
align-items: center;
justify-content: space-between;
border-radius: 8px;
`
export const Test = styled.View`
flex-direction: row;
margin-right: 10px;
`
export const Exp = styled.View`
background-color: rgba(255, 247, 194, 1);
align-items: center;
padding: 15px;
margin: 10px 0px 10px 0px;
border-radius: 4px;
flex-direction: row;
align-items: center;
`
export const Code = styled.View`
justify-content: center;
align-items: center;
`
export const Copy = styled.View`

`
export const Done = styled.View`
align-items: flex-start;
`