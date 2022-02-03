import React from 'react';
import KuponScreen from './Screen/KuponScreen';
import DetailKupon from './Screen/DetailKupon';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabDash from './Navigator/BottomTabDash';
import TopTab from './Navigator/TopTab';
import AddVehicle from './Screen/AddVehicle';
import LacakPesanan from './Screen/LacakPesanan';
import TopTabFavorite from './Navigator/TopTabFavorite';
import Address from './Screen/Address';
import FormAlamat from './Screen/FormAlamat';
import CariAlamat from './Screen/CariAlamat';
import TopTabsUlasan from './Navigator/TopTabsUlasan';
import TulisUlasan from './Screen/TulisUlasan';
import TopTabsBooking from './Navigator/TopTabsBooking';
import DetailBooking from './Screen/DetailBooking';
import ListTopTab from './Navigator/ListtopTabs';

const Navigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="bottom" component={BottomTabDash} options={{ headerShown: false }} />
                <Stack.Screen name="garasiku" component={AddVehicle} options={{
                    headerTransparent: true, headerTintColor: '#fff', headerStyle: { backgroundColor: 'transparent', elevation: 0 }
                }} />
                <Stack.Screen name="listopriwayat" component={ListTopTab} options={{
                    title: "Riwayat Belanja",
                    headerTransparent: true,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: '600',
                    }
                }} />
                <Stack.Screen name="detailbooking" component={DetailBooking} options={{
                    title: "Detail booking",
                    headerTransparent: true,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: '600',
                    }
                }} />
                <Stack.Screen name="tulisulasan" component={TulisUlasan} options={{
                    title: "Tulis Ulasan",
                    headerTransparent: true,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: '600',
                    }
                }} />
                <Stack.Screen name="topbooking" component={TopTabsBooking} options={{
                    title: "Booking Service Saya",
                    headerTransparent: true,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: '600',
                    }
                }} />
                <Stack.Screen name="carialamat" component={CariAlamat} options={{
                    title: "Cari Alamat",
                    headerTransparent: true,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: '600',
                    }
                }}
                />
                <Stack.Screen name="formalamat" component={FormAlamat} options={{
                    title: "Tambah Alamat",
                    headerTransparent: true,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: '600',
                    }
                }}
                />
                <Stack.Screen name="alamat" component={Address} options={{
                    title: "Daftar Alamat",
                    headerTransparent: true,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: '600',
                    }
                }}
                />
                <Stack.Screen name="lacakpesanan" component={LacakPesanan} options={{
                    title: "Lacak Pesanan",
                    headerTransparent: true,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: '600',
                    }
                }} />
                <Stack.Screen name="topulas" component={TopTabsUlasan} options={{
                    title: "Ulasan Saya",
                    headerTransparent: true,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: '600',
                    }
                }} />
                <Stack.Screen name="topfavorite" component={TopTabFavorite} options={{
                    title: "Favorite",
                    headerTransparent: true,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: '600',
                    }
                }} />
                <Stack.Screen name="top" component={TopTab} options={{
                    title: "Tambah Kendaraan",
                    headerTransparent: true,
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: '700',
                    }
                }} />
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
