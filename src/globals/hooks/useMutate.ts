import { useFields } from '../../globals/stores/fields';
import { addPost } from '../services/api';
import { useMutation } from '@tanstack/react-query';

export const useMutate = () => {
  const { fields } = useFields();

  const { mutateAsync } = useMutation({
    onSuccess: async (data) => {
      console.log('Success', data);
    },
    mutationFn: async () => {
      console.log('Mutate', fields);
      //await addPost({ ...fields });
    },
  });

  return { mutateAsync };
};
