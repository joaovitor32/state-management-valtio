import { useValidateInput } from '@/globals/hooks/useValidateInput';
import { useCallback } from 'react';
import { proxy, useSnapshot } from 'valtio';

import { Fields, _preset, _presetType } from './preset';

export const state = proxy<_presetType>(_preset);

export const useFields = () => useSnapshot(state);

export const useValtioFields = () => {
  const { validateInput } = useValidateInput();

  const changeFieldValue = useCallback((name: keyof Fields, value: string) => {
    state.fields[name] = value;
  }, []);

  const validate = useCallback(
    (name: keyof Fields) => {
      const { isValid, message } = validateInput({ name, value: state.fields[name] });
      if (isValid) {
        state.errors[name] = message;
      } else {
        state.errors[name] = '';
      }
    },
    [validateInput]
  );

  return { changeFieldValue, validate };
};
