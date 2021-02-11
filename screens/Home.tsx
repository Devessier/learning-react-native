import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import tw from 'tailwind-rn';

import { RootStackParamList } from 'App';
import { IColorWithDescription } from 'shared/color-palette';
import ColorBox from 'components/ColorBox';
import { FlatList } from 'react-native-gesture-handler';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<Props> = ({ navigation }) => {
  const colorPalettes: {
    title: string;
    data: IColorWithDescription[];
  }[] = [
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
