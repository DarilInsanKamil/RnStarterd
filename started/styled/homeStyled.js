import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`
export const TxtHead = styled.Text`
    margin: 20px 0px 20px 0px;
    font-size: 28px;
    text-align: center;
    `
export const InputTodo = styled.TextInput`
    border: 1px solid black;
    width: 80%;
    padding: 15px;
    font-size: 20px;
    border-radius: 15px;
    `
    export const ButtonAdd = styled.TouchableOpacity`
    align-items: center;
    background-color: #ddd;
    margin: 20px 0px 0px 0px;
    padding: 10px 20px 10px 20px;
    border-radius: 5px;
    width: 30%;
    `
    export const ForInput = styled.View`
    align-items: center
    `
    export const ButtonNav = styled.TouchableOpacity`
    margin: 5px 0px 0px 0px;
    padding: 10px 20px 10px 20px;
    border-radius: 5px;


    `
export const TxtBtn = styled.Text`
    font-size: 16px;
    `
    export const ListTodo = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 20px 20px 0px 20px;
    background-color: #ddd;
    padding: 20px;
    border-radius: 10px;
    `
    export const TxtList = styled.Text`
        font-size: 20px;
        width: 85%;
    `
    export const DeleteBtn = styled.TouchableOpacity`
        background-color: red;
        padding: 7px;
        border-radius: 5px;
    `