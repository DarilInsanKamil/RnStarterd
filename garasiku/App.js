import React from 'react'
import { View, Text, Image } from 'react-native'
import KuponScreen from './Screen/KuponScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DetailKupon from './Screen/DetailKupon';
import HeaderImg from './asset/headerimg.png'
import DashboardEmpty from './Screen/DashboardEmpty';
const App = () => {
  // const Stack = createNativeStackNavigator()
  return (
    <DashboardEmpty />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="listkupon" component={KuponScreen} options={{
    //       title: "Kupon Saya",
    //       headerStyle: {
    //         backgroundColor: '#0033A0',
    //       },
    //       headerTitleAlign: 'center',
    //       headerTintColor: '#fff',
    //       headerTitleStyle: {
    //         fontWeight: '700',
    //       }
    //     }} />
    //     <Stack.Screen name="detailkupon" component={DetailKupon} options={{
    //       title: "Detail Kupon",
    //       headerStyle: {
    //         backgroundColor: '#0033A0',
    //       },
    //       headerTitleAlign: 'center',
    //       headerTintColor: '#fff',
    //       headerTitleStyle: {
    //         fontWeight: '700',
    //       }
    //     }} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default App
