import { create } from 'zustand';

export const dataStore = create((set) => ({
  frameLink: '',
  setFrameLink: (link) => set({ frameLink: link }),
}));
