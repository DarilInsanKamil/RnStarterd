import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
flex: 1;
margin: 0px 10px 0px 10px;
    `
export const NavigationTop = styled.View`
        flex-direction: row;
        justify-content: space-between;
        margin: 20px 0px 20px 0px;
        align-items: center;
    `
export const NavigateBottom = styled.View`
    position: absolute;
    bottom: 20px;
    width: 100%;
    align-items: center;
    justify-content: center;
    box-shadow: 10px 10px grey;
`
export const BottomNav = styled.View`
    background-color: #ddd;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
    padding: 15px;
    `
export const TextApp = styled.Text`
    font-size: 24px;
    font-weight: 600;
    `
export const Story = styled.View`
    // background-color: #e4e4;
    flex: 0.17;
    `
    export const Feed = styled.View`
    // background-color: #3535;
    flex: 1;
    `
export const Content = styled.ScrollView`
    margin: 10px 0px 0px 0px;
    flex: 1;
    // background-color: #ddd;
    `
