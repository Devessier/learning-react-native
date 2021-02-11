import React from 'react';
import { Text, FlatList } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import tw from 'tailwind-rn';

import ColorBox from 'components/ColorBox';
import type { RootStackParamList } from 'App';

type Props = StackScreenProps<RootStackParamList, 'ColorPalette'>;

const ColorPalette: React.FC<Props> = ({
  route: {
    params: { colors },
  },
}) => {
  return (
    <FlatList
      style={tw('p-5 bg-white')}
      data={colors}
      keyExtractor={({ color }) => color}
      renderItem={({ item: { color, text } }) => (
        <ColorBox color={color} style={tw('mb-2 rounded')}>
          {({ style }) => <Text style={style}>{text}</Text>}
        </ColorBox>
      )}
    />
  );
};

export default ColorPalette;
