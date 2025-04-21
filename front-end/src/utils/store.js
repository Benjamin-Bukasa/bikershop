
import { create } from 'zustand';


// Store pour enregistrer l'Etat de mode light et Dark

const useThemeStore = create((set) => ({
  theme: 'light',
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light'
    }))
}));

export default useThemeStore;

export const useToggleNav = create((set)=>({
  open:false,
  setOpen:()=>set((state)=>({open:!state.open}))
}))


