import { TextInput, ImageBackground } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListRiwayat from '../Screen/ListRiwayat';
import BACKGROUND from '../asset/BACKGROUND.png';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Header } from '../styled/bookingStyled';
import Diproses from '../Screen/Diproses';
import Dikemas from '../Screen/Dikemas';
import Selesai from '../Screen/Selesai';
import BelumBayar from '../Screen/BelumBayar';
import Dikirim from '../Screen/Dikirim';

const ListTopTab = () => {
    const Tab = createMaterialTopTabNavigator()
    return (
        <>
            <ImageBackground source={BACKGROUND}>
                <Header>
                    <Ionicons name="search-outline" size={18} color="#fff" />
                    <TextInput placeholder='Cari Pesanan' placeholderTextColor={'#fff'} />
                </Header>
            </ImageBackground>
            <Tab.Navigator screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    elevation: 0,
                },
            }}>
                <Tab.Screen name="Semua Transaksi" component={ListRiwayat} />
                <Tab.Screen name="Belum dibayar" component={BelumBayar} />
                <Tab.Screen name="Diproses" component={Diproses} />
                <Tab.Screen name="Dikemas" component={Dikemas} />
                <Tab.Screen name="Dikirim" component={Dikirim} />
                <Tab.Screen name="Selesai" component={Selesai} />
            </Tab.Navigator>
        </>
    )
}
export default ListTopTab;