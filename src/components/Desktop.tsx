"use client";

import { useWindowsStore } from "../state/windowsStore";

export default function Desktop() {
  const openWindow  = useWindowsStore((s) => s.openWindow);

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 p-4 flex flex-col gap-4">
      <button
        className="flex flex-col items-center gap-2 w-24 p-2 rounded hover:bg-white hover:bg-opacity-20 transition"
        onClick={() => openWindow("about")}
      >
        <div className="w-16 h-16 bg-yellow-400 rounded flex items-center justify-center text-2xl">
          👤
        </div>
        <span className="text-white text-sm text-center">About</span>
      </button>

      <button
        className="flex flex-col items-center gap-2 w-24 p-2 rounded hover:bg-white hover:bg-opacity-20 transition"
        onClick={() => openWindow("projects")}
      >
        <div className="w-16 h-16 bg-green-400 rounded flex items-center justify-center text-2xl">
          📁
        </div>
        <span className="text-white text-sm text-center">Projects</span>
      </button>

      <button
        className="flex flex-col items-center gap-2 w-24 p-2 rounded hover:bg-white hover:bg-opacity-20 transition"
        onClick={() => openWindow("resume")}
        >
        <div className="w-16 h-16 bg-red-400 rounded flex items-center justify-center text-2xl">
          📄
        </div>
        <span className="text-white text-sm text-center">Resume</span>
      </button>
    </div>
  );
}