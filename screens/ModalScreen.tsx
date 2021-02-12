import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import tw from 'tailwind-rn';

import { RootStackParamList } from 'App';
import AppTextInput from 'components/AppTextInput';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = StackScreenProps<RootStackParamList, 'Modal'>;

const schema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
});

const ModalScreen: React.FC<Props> = ({ navigation }) => {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });

  const inputs = [
    {
      name: 'firstName',
      label: 'First name',
      placeholder: 'e.g. Edgar',
    },
    {
      name: 'lastName',
      label: 'Last name',
      placeholder: 'e.g. Morin',
    },
  ];

  const onSubmit = handleSubmit(({ firstName, lastName }) => {
    console.log('first, last', firstName, lastName);
  });

  useEffect(() => {
    navigation.setOptions({
      headerRight: ({}) => (
        <TouchableOpacity
          style={tw('rounded-full px-3 py-1 bg-blue-500 mr-4')}
          onPress={onSubmit}
        >
          <Text style={tw('text-gray-100 text-sm')}>Save</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, onSubmit]);

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      style={tw('px-4 h-full bg-white')}
    >
      {inputs.map(({ name, label, placeholder }, index) => {
        const isLastItemOfList = !(index < inputs.length - 1);

        return (
          <AppTextInput
            key={name}
            control={control}
            name={name}
            labelText={label}
            placeholder={placeholder}
            style={[
              index === 0 && tw('mt-10'),
              isLastItemOfList ? tw('mb-24') : tw('mb-4'),
            ]}
          />
        );
      })}
    </KeyboardAwareScrollView>
  );
};

export default ModalScreen;
