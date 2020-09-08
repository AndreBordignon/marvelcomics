// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import DetailsScreen from './pages/DetailsScreen';
import {View, Image} from 'react-native';


const Stack = createStackNavigator();
function LogoTitle() {
  return (
    <Image 
      source={require('./../assets/marvel.png')} 
      style={{width: 200, height: 80}}  
      resizeMode='cover' 
    />
  );
}
function Routes() {
  return (
    <NavigationContainer >
      <Stack.Navigator 
        screenOptions={{
           headerTitle: props => <LogoTitle {...props} />,
           headerTitleAlign: 'center',
           headerStyle: {
            backgroundColor: '#e62429',
            height: 200,
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