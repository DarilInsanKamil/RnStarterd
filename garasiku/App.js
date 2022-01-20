import React from 'react'
import { View, Text } from 'react-native'
import KuponScreen from './Screen/KuponScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DetailKupon from './Screen/DetailKupon';

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="listkupon" component={KuponScreen}/>
        <Stack.Screen name="detailkupon" component={DetailKupon} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
