import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import tw from 'tailwind-rn';

export default function App() {
  const boxes = [
    {
      style: tw('bg-green-400'),
      text: 'Light green',
    },
    {
      style: tw('bg-blue-500'),
      text: 'Blue',
    },
    {
      style: tw('bg-pink-600'),
      text: 'Pink',
    },
    {
      style: tw('bg-yellow-500'),
      text: 'Orange',
    },
  ];

  return (
    <SafeAreaView style={tw('flex-1')}>
      <View style={tw('flex-1 p-4')}>
        <StatusBar style="auto" />

        <Text style={tw('font-bold text-base mb-2')}>
          Here are somes boxes of different colours
        </Text>

        {boxes.map(({ style, text }) => (
          <View
            key={text}
            style={[style, tw('justify-center items-center py-2 mb-2 rounded')]}
          >
            <Text style={tw('text-white')}>{text}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
