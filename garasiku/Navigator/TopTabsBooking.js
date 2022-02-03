import { ImageBackground, TextInput } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BookingService from '../Screen/BookingService';
import { Header,InputText } from '../styled/bookingStyled';
import BACKGROUND from '../asset/BACKGROUND.png';
import Ionicons from 'react-native-vector-icons/Ionicons'
const TopTabsBooking = () => {
    const Tabs = createMaterialTopTabNavigator()
    return (
        <>
            <ImageBackground source={BACKGROUND}>
                <Header>
                    <Ionicons name="search-outline" size={18} color="#fff" />
                    <InputText placeholder='Cari booking saya' placeholderTextColor={'#fff'} />
                </Header>
            </ImageBackground>
            <Tabs.Navigator>
                <Tabs.Screen name="Akan Datang" component={BookingService} />
                <Tabs.Screen name="Sudah Selesai" component={BookingService} />
            </Tabs.Navigator>
        </>
    );
};

export default TopTabsBooking;
