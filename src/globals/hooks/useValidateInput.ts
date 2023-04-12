import { useCallback } from 'react';

export const fieldsTypes = {
  title: (value: string) => ({
    isValid: !value,
    message: 'Title não válido',
  }),
  description: (value: string) => ({
    isValid: !value,
    message: 'Description não válido',
  }),
};

export type FieldType = keyof typeof fieldsTypes;

interface DataProps {
  name: FieldType;
  value: string;
}

export const useValidateInput = () => {
  const validateInput = useCallback(({ name, value }: DataProps) => fieldsTypes[name](value), []);

  return { validateInput };
};
