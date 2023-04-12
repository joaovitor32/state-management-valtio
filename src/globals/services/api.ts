import { AxiosError } from 'axios';
import { api } from '../adapter';

const axiosConfig = {
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

interface AddPostProps {
  title: string;
  description: string;
}

export const addPost = async ({ title, description }: AddPostProps) => {
  try {
    const { data } = await api.post(
      `/api/Posts`,
      {
        body: {
          title,
          description,
        },
      },
      axiosConfig
    );

    if (data.error) {
      throw new Error(data.error);
    }

    return data;
  } catch (err) {
    const { response } = err as unknown as AxiosError<Error>;

    return {
      ok: false,
      data: null,
      error: response?.data.message,
      status: response?.status,
    };
  }
};
