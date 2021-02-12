import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import tw from 'tailwind-rn';

import AppIcon from 'components/AppIcon';
import Home from 'screens/Home';
import ColorPalette from 'screens/ColorPalette';
import ModalScreen from 'screens/ModalScreen';
import { IColorPalette } from 'shared/color-palette';

export type MainStackParamList = {
  Home: undefined;
  ColorPalette: IColorPalette;
};

export type RootStackParamList = {
  Main: NavigatorScreenParams<MainStackParamList>;
  Modal: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

const MainStackScreen: React.FC<
  StackScreenProps<RootStackParamList, 'Main'>
> = ({ navigation }) => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Modal')}
              style={tw('mr-4')}
            >
              <AppIcon
                name="add-circle"
                size={32}
                color="white"
                style={tw('text-blue-500 font-semibold')}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <MainStack.Screen
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
    </MainStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <RootStack.Navigator initialRouteName="Main">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Modal"
          component={ModalScreen}
          options={{
            headerTitle: 'New color palette',
            headerBackTitleVisible: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
