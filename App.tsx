import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from 'screens/Home';
import ColorPalette from 'screens/ColorPalette';
import { IColorPalette } from 'shared/color-palette';

export type RootStackParamList = {
  Home: undefined;
  ColorPalette: IColorPalette;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({
            route: {
              params: { paletteName },
            },
          }) => ({
            title: paletteName,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
