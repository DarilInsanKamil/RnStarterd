import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardEmpty from '../Screen/DashboardEmpty';
import SettingScreen from '../Screen/SettingScreen'
const BottomTabDash = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator>
            <Tab.Screen name="profile" component={DashboardEmpty} options={{ headerShown: false }} />
            <Tab.Screen name="setting" component={SettingScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabDash;
