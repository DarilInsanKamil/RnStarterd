import { View, Text, TextInput, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TextButton } from '../styled/addvechStyled'
import MobileTabs from '../Screen/MobileTabs';
import garasiku from '../asset/garasiku.png'
import MotorTabs from '../Screen/MotorTabs';
const TopTab = () => {
    const Tab = createMaterialTopTabNavigator()
    return (
        <>
            <ImageBackground source={garasiku} style={{ paddingBottom: 55 }}></ImageBackground>
            <View style={{backgroundColor: '#fff'}}>
                <TextButton color="#000" size="18px" mtop="10px">Tambahkan kendaraan dalam Garasiku</TextButton>
            </View>
            <Tab.Navigator screenOptions={
                {
                    tabBarStyle: { backgroundColor: '#fff' },
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarItemStyle: { color: 'blue' },
                    tabBarIndicatorStyle: { backgroundColor: 'yellow' },
                }}>
                <Tab.Screen name="Mobil" component={MobileTabs} />
                <Tab.Screen name="Motor" component={MotorTabs} />
            </Tab.Navigator>
        </>
    );
};

export default TopTab;
