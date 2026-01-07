"use client";

import { useWindowsStore } from "../state/windowsStore";

export default function Desktop() {
  const openWindow = useWindowsStore((s) => s.openWindow);

  return (
    <div className="absolute inset-0 p-6">
      <div className="flex flex-col gap-4 w-28 text-white">
        <button className="p-2 rounded hover:bg-white/10" onClick={() => openWindow("about")}>
          👤 About
        </button>
        <button className="p-2 rounded hover:bg-white/10" onClick={() => openWindow("projects")}>
          💼 Projects
        </button>
        <button className="p-2 rounded hover:bg-white/10" onClick={() => openWindow("resume")}>
          📄 Resume
        </button>
        <button className="p-2 rounded hover:bg-white/10">
          🧮 Calculator
        </button>
        <button className="p-2 rounded hover:bg-white/10" >
          📝 Notes
        </button>
        <button className="p-2 rounded hover:bg-white/10" >
          ⚙️ Settings
        </button>
        <button className="p-2 rounded hover:bg-white/10" >
          📁 File Manager
        </button>
        <button className="p-2 rounded hover:bg-white/10" >
          ⌨️ Terminal
        </button>
      </div>
    </div>
  );
}
