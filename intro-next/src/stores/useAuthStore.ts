import { create } from 'zustand';

interface UseAuthStore {
  email: string;
  username: string;
  setAuth: (email: string, username: string) => void;
}

export const useAuthStore = create<UseAuthStore>((set) => ({
  email: '',
  username: '',
  setAuth: (email, username) =>
    set(() => ({ email: email, username: username })),
}));
