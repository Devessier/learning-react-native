import React, { useState } from 'react';
import { Text, TouchableOpacity, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import tw from 'tailwind-rn';

import { MainStackParamList, RootStackParamList } from 'App';
import { IColorWithDescription } from 'shared/color-palette';
import ColorBox from 'components/ColorBox';

type HomeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<MainStackParamList, 'Home'>,
  StackNavigationProp<RootStackParamList>
>;

type Props = {
  navigation: HomeScreenNavigationProp;
  route: RouteProp<MainStackParamList, 'Home'>;
};

interface IColorPaletteCollection {
  title: string;
  data: IColorWithDescription[];
}

const DEFAULT_COLOR_PALETTES: IColorPaletteCollection[] = [
  {
    title: 'Swag Palette',
    data: [
      {
        color: 'cyan',
        text: 'Cyan of sky',
      },
      {
        color: 'blue',
        text: 'Sea Blue',
      },
      {
        color: 'orange',
        text: 'Orange orange',
      },
    ],
  },
  {
    title: 'Space conquest palette',
    data: [
      {
        color: 'black',
        text: 'Space black to Mars',
      },
      {
        color: 'orange',
        text: 'Sun color',
      },
      {
        color: 'pink',
        text: 'Orion color',
      },
    ],
  },
];

const Home: React.FC<Props> = ({ navigation }) => {
  const [colorPalettes] = useState(DEFAULT_COLOR_PALETTES);

  return (
    <FlatList
      data={colorPalettes}
      keyExtractor={({ title }) => title}
      renderItem={({ item: { title, data } }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ColorPalette', {
              paletteName: title,
              colors: data,
            })
          }
          style={tw('px-4')}
        >
          <Text style={tw('text-xl font-bold mb-1')}>{title}</Text>

          <FlatList
            horizontal
            data={data}
            keyExtractor={({ color }) => color}
            renderItem={({ item: { color } }) => (
              <ColorBox color={color} style={tw('w-10 h-10 mr-2 rounded')} />
            )}
            style={tw('pb-2')}
          />
        </TouchableOpacity>
      )}
      style={tw('h-full pt-2 bg-white')}
    />
  );
};

export default Home;
