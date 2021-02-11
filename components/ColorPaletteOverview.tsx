import React from 'react';
import { FlatList } from 'react-native';
import tw from 'tailwind-rn';

import ColorBox from 'components/ColorBox';
import { IColorWithDescription } from 'shared/color-palette';

interface Props {
  colorPalette: IColorWithDescription[];
}

const ColorPaletteOverview: React.FC<Props> = ({ colorPalette }) => {
  return (
    <FlatList
      style={tw('p-5')}
      data={colorPalette}
      keyExtractor={({ color }, index) => `${color}-${index}`}
      renderItem={({ item: { color } }) => (
        <ColorBox color={color} style={tw('w-4 h-4 mb-2')} />
      )}
      horizontal={true}
    />
  );
};

export default ColorPaletteOverview;
