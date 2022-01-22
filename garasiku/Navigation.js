import React from 'react';
import KuponScreen from './Screen/KuponScreen';
import DetailKupon from './Screen/DetailKupon';
import DashboardEmpty from './Screen/DashboardEmpty';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Navigation = () => {
    const Stack = createNativeStackNavigator()
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="listkupon" component={KuponScreen} options={{
                    title: "Kupon Saya",
                    headerStyle: {
                        backgroundColor: '#0033A0',
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: '700',
                    }
                }} />
                <Stack.Screen name="detailkupon" component={DetailKupon} options={{
                    title: "Detail Kupon",
                    headerStyle: {
                        backgroundColor: '#0033A0',
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: '700',
                    }
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
