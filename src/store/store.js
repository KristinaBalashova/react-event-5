import { create } from 'zustand';
// import currentUrl from ''
const useUserData = create((set) => ({
  userData: [],
  auth: true,
  token: '',
  error: null,
  loading: false,
  fetchUserData: async () => {
    set({ loading: true });
    // запрос к бэку, адрес надо правильный сделать
    try {
      if (auth) {
        const response = await fetch('http://localhost:4040/api/user');
        if (!response.ok) set({ error: true });
        const responseData = await response.json();
        set({ userData: responseData, error: false });
      }
    } catch (error) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  useAuth: (state) => set({ auth: !state.auth }),
  useToken: (token) => set({ token }),

}));

export default useUserData;
