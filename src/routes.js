// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import DetailsScreen from './pages/DetailsScreen';


const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer >
      <Stack.Navigator 
        screenOptions={{
           title: 'Marvel Comics',
           headerStyle: {
            backgroundColor: '#e62429',
           },
           headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
           },
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;