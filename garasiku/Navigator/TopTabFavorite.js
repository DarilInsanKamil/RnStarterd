import { TextInput, ImageBackground } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FavoriteScreen from '../Screen/FavoriteScreen';
import BACKGROUND from '../asset/BACKGROUND.png';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Header } from '../styled/bookingStyled';
import SukuCadang from '../Screen/SukuCadang';
import LayananBengkel from '../Screen/LayananBengkel';

const TopTabFavorite = () => {
    const Tab = createMaterialTopTabNavigator()
    return (
        <>
            <ImageBackground source={BACKGROUND}>
                <Header>
                    <Ionicons name="search-outline" size={18} color="#fff" />
                    <TextInput placeholder='Cari booking saya' placeholderTextColor={'#fff'} />
                </Header>
            </ImageBackground>
            <Tab.Navigator screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    elevation: 0,
                },
            }}>
                <Tab.Screen name="Semua" component={FavoriteScreen} />
                <Tab.Screen name="Suku Cadang" component={SukuCadang} />
                <Tab.Screen name="Layanan Bengkel" component={LayananBengkel} />
            </Tab.Navigator>
        </>
    );
};
export default TopTabFavorite;