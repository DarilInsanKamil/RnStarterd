import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    background-color: rgba(245, 245, 245, 1);
`
export const Header = styled.View`
    background-color: ${props => props.bc || "#fff"};
    padding: ${props => props.pad || "5px 15px 5px 15px"};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Textstyle = styled.Text`
    color: ${props => props.color || "rgba(97, 97, 97, 1)"};
    font-size: ${props => props.size || "12px"};
    font-weight: ${props => props.weight || "400"};
`
export const Purchase = styled.View`
    background-color: ${props => props.bc || "#fff"};
    padding: ${props => props.pad || "15px"};
    margin-top: ${props => props.mtop || "15px"};
`
export const Images = styled.View`
    flex-direction: row;
    margin: 15px 0px 0px 0px;
`
export const Imagestyle = styled.View`
    elevation: 5;
    border-radius: 16px;
`
export const Detail = styled.View`
    flex: 1;
    margin-left: 10px ;
    justify-content: space-between;
`
export const Icons = styled.Image`
    width: 20px;
    height: 30px;
`
export const Address = styled.View`
    background-color: #fff;
    flex-direction: row;
    margin-top: 5px;
`
export const Button = styled.View`
    background-color: ${props => props.bc || 'rgba(221, 53, 86, 1)'};
    align-items: center;
    padding: ${props => props.pad || "10px"};
    border-radius: 4px;
    border: ${props => props.bord || "0px"};
    margin-top: ${props => props.mtop || "5px"};
`
export const Poin = styled.View`
    background-color: rgba(229, 239, 229, 1);
    padding: 15px;
    align-items: center;
`