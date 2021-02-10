import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import tw from 'tailwind-rn';

import type { Color } from './components/ColorBox';
import ColorBox from './components/ColorBox';

export default function App() {
  const boxes: { color: Color; text: string }[] = [
    {
      color: 'green',
      text: 'Light green',
    },
    {
      color: 'blue',
      text: 'Blue',
    },
    {
      color: 'cyan',
      text: 'Pink',
    },
    {
      color: 'orange',
      text: 'Orange',
    },
  ];

  return (
    <SafeAreaView style={tw('h-full')}>
      <View style={tw('h-full p-4')}>
        <StatusBar style="auto" />

        <Text style={tw('font-bold text-base mb-2')}>
          Here are somes boxes of different colours
        </Text>

        {boxes.map(({ color, text }, index) => (
          <ColorBox key={index} color={color} style={tw('mb-2')}>
            {text}
          </ColorBox>
        ))}
      </View>
    </SafeAreaView>
  );
}
