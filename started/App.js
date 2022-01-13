// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import React from 'react';
import Home from './Screen/home'
import TodoList from './Screen/TodoForm';
import configureStore from './reducer/store'
import { Provider } from 'react-redux';
const store = configureStore()
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <Provider store={store}>
      {/* <Home />
      <TodoList /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={Home}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="List Todo"
            component={TodoList}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
