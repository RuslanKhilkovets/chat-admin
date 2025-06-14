import { useContext } from 'react';
import { MutateOptions, useMutation } from '@tanstack/react-query';
import { AuthContext } from '../context/Auth/AuthContext';

export const useAuthMutation = (options: MutateOptions) => {
  const { logout } = useContext(AuthContext);
  const mutation = useMutation(options);

  if (mutation?.error?.status === 401 || mutation?.error?.status === 403) {
    return logout();
  }

  return {
    ...mutation,
    isLoading: mutation.isPending,
  };
};

export default useAuthMutation;
