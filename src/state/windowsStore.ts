import { create } from "zustand";

export type AppType = "about" | "projects"| "resume";

export type WindowState = {
  id: string;
  app: AppType;
  title: string;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { w: number; h: number };
};

/**
 * Represents the state store for managing multiple windows in the application.
 * 
 * @typedef {Object} WindowStore
 * @property {WindowState[]} windows - Array of currently open windows
 * @property {number} nextZ - Z-index counter for window layering
 * @property {Function} openWindow - Opens a new window with the specified app type
 * @property {Function} closeWindow - Closes a window by its ID
 * @property {Function} focusWindow - Brings a window to focus by its ID
 * @property {Function} toggleMinimize - Toggles the minimized state of a window
 * @property {Function} toggleMaximize - Toggles the maximized state of a window
 * @property {Function} moveWindow - Moves a window to a new position by X and Y coordinates
 */


type WindowStore = {
  windows: WindowState[];
  nextZ: number;

  openWindow: (app: AppType) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) =>void;
  toggleMinimize: (id: string) =>void;
  toggleMaximize: (id: string) =>void;
  moveWindow: (id: string, x: number, y: number) =>void;
};

/**
 * APP_META is a record that holds metadata for different application types.
 * Each entry in the record corresponds to an application type and contains:
 * 
 * - `title`: A string representing the title of the application.
 * - `defaultSize`: An object specifying the default width (`w`) and height (`h`) of the application window.
 * 
 * The supported application types include:
 * - `about`: Metadata for the About application.
 * - `projects`: Metadata for the Projects application.
 * - `resume`: Metadata for the Resume application.
 */

const APP_META: Record<AppType, { title: string; defaultSize: { w: number; h: number };}> = {
  about: { title: "About", defaultSize: { w: 520, h: 380 }},
  projects: { title: "Projects", defaultSize: { w: 720, h: 480 }},
  resume: { title: "Resume", defaultSize: { w: 700, h: 520 }},
};

/**
 * A custom hook that manages the state of windows in a windowing system.
 * 
 * @returns {Object} The state and actions for managing windows.
 * @property {Array<Window>} windows - The list of currently open windows.
 * @property {number} nextZ - The next z-index value for new windows.
 * 
 * @method openWindow - Opens a new window with the specified application.
 * @param {string} app - The identifier of the application to open.
 * 
 * @method closeWindow - Closes a window by its unique identifier.
 * @param {string} id - The unique identifier of the window to close.
 * 
 * @method focusWindow - Brings a window to the front by updating its z-index.
 * @param {string} id - The unique identifier of the window to focus.
 * 
 * @method toggleMinimize - Toggles the minimized state of a window.
 * @param {string} id - The unique identifier of the window to minimize or restore.
 * 
 * @method toggleMaximize - Toggles the maximized state of a window.
 * @param {string} id - The unique identifier of the window to maximize or restore.
 * 
 * @method moveWindow - Moves a window to a new position on the screen.
 * @param {string} id - The unique identifier of the window to move.
 * @param {number} x - The new x-coordinate for the window's position.
 * @param {number} y - The new y-coordinate for the window's position.
 */
export const useWindowsStore = create<WindowStore>((set, get) => ({
  windows: [],
  nextZ: 10,

  openWindow: (app) => {
    // if app is already open, focus it instead of opening a duplicate
    const existing = get().windows.find((w) => w.app === app);
    if(existing) {
      get().focusWindow(existing.id);
      return;
    }

    const { title, defaultSize } = APP_META[app];
    const id = `${app}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const z = get().nextZ;

    set((s) => ({
      nextZ: s.nextZ + 1,
      windows: [
        ...s.windows,
        {
          id,
          app,
          title,
          isMinimized: false,
          isMaximized: false,
          zIndex: z,
          position: { x: 80 + s.windows.length * 30, y: 70 + s.windows.length * 20 },
          size: defaultSize,
        },
      ],
    })); 
  },

  closeWindow: (id) => set((s) => ({ windows: s.windows.filter((w) => w.id !== id) })),

  focusWindow: (id) => {
    const z = get().nextZ;
    set((s) => ({
      nextZ: s.nextZ + 1,
      windows: s.windows.map((w) => (w.id === id ? { ...w, zIndex: z, isMinimized: false } : w)),  
    }));
  },

  toggleMinimize: (id) => 
    set((s) => ({
      windows: s.windows.map((w) => (w.id === id ? { ...w, isMinimized: !w.isMinimized } : w)),
    })),

  toggleMaximize: (id) => 
    set((s) => ({
      windows: s.windows.map((w) => (w.id === id ? { ...w, isMaximized: !w.isMaximized } : w)),
    })),

    moveWindow: (id, x, y) => 
    set((s) => ({
      windows: s.windows.map((w) => (w.id === id ? { ...w, position: { x, y } } : w)),
    })),
}));