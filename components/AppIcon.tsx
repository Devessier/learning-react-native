import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type TIoniconsComponent = typeof Ionicons;
type TIoniconsComponentProps = React.ComponentPropsWithoutRef<TIoniconsComponent>;
type TNameProp = TIoniconsComponentProps['name'];

type TPlatformDependentIcons = `ios-${TNameProp}` | `md-${TNameProp}`;

type IconsWithoutPlatformDependent = Exclude<
  TNameProp,
  TPlatformDependentIcons
>;

type TIcons =
  | `ios-${IconsWithoutPlatformDependent}`
  | `md-${IconsWithoutPlatformDependent}`;

interface Props extends TIoniconsComponentProps {
  name: IconsWithoutPlatformDependent;
}

const AppIcon: React.FC<Props> = ({ name, ...props }) => {
  const icon: TIcons =
    Platform.OS === 'ios' ? (`ios-${name}` as const) : (`md-${name}` as const);

  return <Ionicons name={icon} {...props} />;
};

export default AppIcon;
