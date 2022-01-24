import React from 'react';
import KuponScreen from './Screen/KuponScreen';
import DetailKupon from './Screen/DetailKupon';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabDash from './Navigator/BottomTabDash';
import TopTab from './Navigator/TopTab';
import AddVehicle from './Screen/AddVehicle';
import LacakPesanan from './Screen/LacakPesanan';

const Navigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen name="bottom" component={BottomTabDash} options={{ headerShown: false }} />
                <Stack.Screen name="garasiku" component={AddVehicle} />
                <Stack.Screen name="lacakpesanan" component={LacakPesanan} />
                <Stack.Screen name="top" component={TopTab} />
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
