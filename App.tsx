import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import tw from 'tailwind-rn';

export default function App() {
  return (
    <SafeAreaView style={tw('flex-1')}>
      <View
        style={tw(
          'bg-yellow-500 text-white p-4 flex-1 items-center justify-center',
        )}
      >
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
