export type Fields = {
  title: string;
  description: string;
};

export type Errors = {
  title: string;
  description: string;
};

export type _presetType = {
  fields: Fields;
  errors: Errors;
};

export const _preset: _presetType = {
  fields: {
    title: '',
    description: '',
  },
  errors: {
    title: '',
    description: '',
  },
};
