import { create } from "zustand";


type SessionStore = {
  isLoggedIn: boolean;
  username: string;
  login: (username: string) => void;
  logout: () => void;
}

export const useSessionStore = create<SessionStore>((set) => ({
  isLoggedIn: false,
  username: "Guest",

  login: (username) => set({ isLoggedIn: true, username: username || "Guest" }),
  logout: () => set({ isLoggedIn: false }),
}));