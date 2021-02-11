import React from 'react';
import { View, StyleSheet, ViewProps, TextProps } from 'react-native';
import tw from 'tailwind-rn';

import { TColor } from 'shared/color-palette';

interface PropTypes extends ViewProps {
  color: TColor;
  children?: ({}: { style: TextProps }) => React.ReactElement;
}

const ColorBox: React.FC<PropTypes> = ({
  color,
  style: externalStyle,
  children,
  ...props
}) => {
  const coloursStyles: Record<TColor, StyleSheet.NamedStyles<unknown>> = {
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
        coloursStyles[color],
        styles.shadow,
        tw('justify-center items-center py-2'),
      ]}
      {...props}
    >
      {children === undefined
        ? null
        : children({
            style: tw(`${invertTextColor ? 'text-gray-900' : 'text-white'}`),
          })}
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default ColorBox;
