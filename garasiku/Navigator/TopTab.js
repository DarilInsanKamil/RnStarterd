import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {TabBarStyle, TextButton} from '../styled/addvechStyled'
import MobileTabs from '../Screen/MobileTabs';
import MotorTabs from '../Screen/MotorTabs';
const TopTab = () => {
    const Tab = createMaterialTopTabNavigator()
    return (
        <View style={styles.bc}>
            <TextButton color="#000" size="18px" mtop="10px">Tambahkan kendaraan dalam Garasiku</TextButton>
            <Tab.Navigator screenOptions={
                {   
                    tabBarStyle: { backgroundColor: '#fff' },
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarItemStyle:{color: 'blue'},
                    tabBarIndicatorStyle: { backgroundColor: 'yellow' },
                }}>
                <Tab.Screen name="Mobil" component={MobileTabs} />
                <Tab.Screen name="Motor" component={MotorTabs} />
            </Tab.Navigator>
        </View>
    );
};
const styles = StyleSheet.create({
    bc : {
        backgroundColor: "#fff",
        flex: 1
    }
})

export default TopTab;
