import React from 'react';
import { View, Text, StyleSheet, ViewProps } from 'react-native';
import tw from 'tailwind-rn';

export type Color = 'cyan' | 'orange' | 'blue' | 'green' | 'black' | 'pink';

interface PropTypes extends ViewProps {
  color: Color;
  text: string;
}

const ColorBox: React.FC<PropTypes> = ({
  color,
  text,
  style: externalStyle,
  ...props
}: PropTypes) => {
  const styles: Record<Color, StyleSheet.NamedStyles<unknown>> = {
    green: tw('bg-green-400'),
    blue: tw('bg-blue-500'),
    cyan: tw('bg-pink-600'),
    orange: tw('bg-yellow-500'),
    black: tw('bg-gray-900'),
    pink: tw('bg-red-100'),
  };

  const invertTextColor = color === 'pink';

  return (
    <View
      style={[
        externalStyle,
        styles[color],
        tw('justify-center items-center py-2 rounded'),
      ]}
      {...props}
    >
      <Text style={tw(`${invertTextColor ? 'text-gray-900' : 'text-white'}`)}>
        {text}
      </Text>
    </View>
  );
};

export default ColorBox;
