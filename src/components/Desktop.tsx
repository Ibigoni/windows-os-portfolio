"use client";

import { useWindowsStore } from "../state/windowsStore";

export default function Desktop() {
  const openWindow = useWindowsStore((s) => s.openWindow);

  return (
    <div className="absolute inset-0 p-6">
      <div className="grid grid-cols-3 gap-4 w-fit text-white">
        <div className="flex flex-col items-center justify-center p-2 rounded hover:bg-white/10 text-sm">
          <img src="../icons/app/recycle-bin.png" alt="" className="w-10 h-10" />
          <div>Recycle Bin</div>
        </div>
        <div className="flex flex-col items-center justify-center p-2 rounded hover:bg-white/10 text-sm" onClick={() => openWindow("about")}>
          <img src="../icons/app/about-me.png" className="w-10 h-10" />
          <div className="cursor-auto">About</div>
        </div>
        <div className="flex flex-col items-center justify-center p-2 rounded hover:bg-white/10 text-sm" onClick={() => openWindow("projects")}>
          <img src="../icons/app/folder-icon.png" alt="" className="w-10 h-10" />
          <div>Projects</div>
        </div>
        <div className="flex flex-col items-center justify-center p-2 rounded hover:bg-white/10 text-sm" onClick={() => openWindow("resume")}>
          <img src="../icons/app/resume.png" alt="" className="w-10 h-10" />
          <div>Resume</div>
        </div>
        <div className="flex flex-col items-center justify-center p-2 rounded hover:bg-white/10 text-sm">
          <a href="https://www.linkedin.com/in/ibigoni-inye-tam-5376b2204/" target="_blank" className="flex flex-col items-center justify-center cursor-auto">
            <img src="../icons/app/linkedin-icon.png" alt="" className="w-10 h-10" />
            <div>LinkedIn</div>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center p-2 rounded hover:bg-white/10 text-sm">
          <a href="https://github.com/Ibigoni" target="_blank" className="flex flex-col items-center justify-center cursor-auto">
            <img src="../icons/app/github-icon.png" alt="" className="w-10 h-10 bg-white rounded p-0.5"/>
            <div>Github</div>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center p-2 rounded hover:bg-white/10 text-sm">
          <img src="../icons/app/network-icon.png" alt="" className="w-10 h-10" />
          <div>Network</div>
        </div>
      </div>
    </div>
  );
}
