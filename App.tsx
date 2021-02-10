import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, styles.orange]}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  orange: {
    backgroundColor: 'orange',
    color: 'white',
  },

  container: {
    padding: 10,

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
