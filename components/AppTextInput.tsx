import React, { useRef, useState } from 'react';
import { TextInput, Pressable, Text } from 'react-native';
import { Controller, Control } from 'react-hook-form';
import tw from 'tailwind-rn';

import { TStyle } from 'shared/style';

interface IProps {
  control: Control;
  name: string;
  defaultValue?: string;
  labelText: string;
  placeholder: string;
  style?: TStyle;
}

const AppTextInput: React.FC<IProps> = ({
  control,
  name,
  defaultValue = '',
  labelText,
  placeholder,
  style,
}) => {
  const inputRef = useRef<TextInput>(null);
  const [hasFocus, setHasFocus] = useState<boolean>(false);

  function handleContainerPress() {
    inputRef.current?.focus();
  }

  return (
    <Pressable onPress={handleContainerPress} style={style}>
      <Text style={tw('text-lg font-bold')}>{labelText}</Text>

      <Controller
        name={name}
        control={control}
        onFocus={() => {
          inputRef.current?.focus();
        }}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            onFocus={() => setHasFocus(true)}
            onBlur={() => {
              setHasFocus(false);
              onBlur();
            }}
            onChangeText={(inputText) => onChange(inputText)}
            value={value}
            placeholder={placeholder}
            ref={inputRef}
            style={tw(
              `h-10 bg-white border-b text-base ${
                hasFocus ? 'border-gray-400' : 'border-gray-300'
              }`,
            )}
          />
        )}
        defaultValue={defaultValue}
      />
    </Pressable>
  );
};

export default AppTextInput;
