import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WaitUlas from '../Screen/WaitUlas';
import BACKGROUND2 from '../asset/BACKGROUND2.png'
import DoneUlas from '../Screen/DoneUlas';

export default function TopTabsUlasan() {
    const Tab = createMaterialTopTabNavigator();
    const Background = () => {
        return <ImageBackground source={BACKGROUND2}></ImageBackground>
    }
    return (
        <>
            <ImageBackground source={BACKGROUND2} style={{ paddingBottom: 55 }}>
            </ImageBackground>
            <Tab.Navigator screenOptions={{
                tabBarStyle: {
                    elevation: 5
                },
                tabBarIndicatorStyle: {backgroundColor: 'yellow'},
                tabBarLabelStyle: {fontSize: 12, fontWeight: "700"},
                tabBarItemStyle: {height: 40, alignSelf: 'center'},
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#C2D5FF',
                tabBarBackground: () => (
                     <ImageBackground source={BACKGROUND2} style={{ paddingBottom: 55 }}></ImageBackground>
                )
            }}
            >
                <Tab.Screen name="Menunggu diulas" component={WaitUlas} />
                <Tab.Screen name="Selesai diulas" component={DoneUlas} />
            </Tab.Navigator>
        </>
    );
}
