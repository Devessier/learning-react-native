import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import tw from 'tailwind-rn';

export type Color = 'cyan' | 'orange' | 'blue' | 'green';

interface PropTypes {
  children: React.ReactNode;
  color: Color;
  style?: StyleProp<ViewStyle>;
}

export default function ColorBox({
  color,
  style: externalStyle,
  children,
}: PropTypes) {
  const styles: Record<Color, StyleSheet.NamedStyles<unknown>> = {
    green: tw('bg-green-400'),
    blue: tw('bg-blue-500'),
    cyan: tw('bg-pink-600'),
    orange: tw('bg-yellow-500'),
  };

  return (
    <View
      style={[
        externalStyle,
        styles[color],
        tw('justify-center items-center py-2 rounded'),
      ]}
    >
      <Text style={tw('text-white')}>{children}</Text>
    </View>
  );
}
