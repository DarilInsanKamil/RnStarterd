import React, { useEffect } from 'react'
import { FlatList, Text, Image } from 'react-native';
import { MainData } from './Data/MainData';
import DashboardEmpty from './Screen/DashboardEmpty';
import Navigation from './Navigation';
import ListRiwayat from './Screen/ListRiwayat';
const App = () => {
  return (
    <Navigation/>
    // <ListRiwayat/>
    // <Text>test</Text>
    // <DashboardEmpty />
  )
}
export default App
