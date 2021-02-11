import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import tw from 'tailwind-rn';

import type { Color } from './components/ColorBox';
import ColorBox from './components/ColorBox';

interface BoxShape {
  color: Color;
  text: string;
}

export default function App() {
  const boxes: BoxShape[] = Array.from({ length: 6 })
    .map(() => {
      const skeleton: BoxShape[] = [
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
        {
          color: 'black',
          text: 'Black',
        },
        {
          color: 'pink',
          text: 'Pink',
        },
      ];

      return skeleton;
    })
    .flat();

  return (
    <SafeAreaView style={tw('h-full')}>
      <View style={tw('h-full p-4')}>
        <StatusBar style="auto" />

        <Text style={tw('font-bold text-base mb-2')}>
          Here are somes boxes of different colours
        </Text>

        <FlatList
          data={boxes}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item: { color, text } }) => (
            <ColorBox color={color} text={text} style={tw('mb-2')} />
          )}
          ListHeaderComponent={<Text>List Header</Text>}
          ListFooterComponent={<Text>List Footer</Text>}
        />
      </View>
    </SafeAreaView>
  );
}
