import { create } from "zustand";

type UIStore = {
  isStartOpen: boolean;
  toggleStart: () => void;
  openStart: () => void;
  closeStart: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isStartOpen: false,
  toggleStart: () => set((s) => ({ isStartOpen: !s.isStartOpen })),
  openStart: () => set({isStartOpen: true}),
  closeStart: () => set({isStartOpen: false})
}));