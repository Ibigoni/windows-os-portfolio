"use client";

import { useEffect, useRef } from "react";
import { useUIStore } from "@/state/uiStore";
import { useWindowsStore } from "@/state/windowsStore";

export default function StartMenu() {
  const isStartOpen = useUIStore((s) => s.isStartOpen);
  const closeStart = useUIStore((s) => s.closeStart);
  const openWindow = useWindowsStore((s) => s.openWindow);

  const panelRef = useRef<HTMLDivElement | null>(null);

  const toggleFullScreen = () => {
    if(!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };


  //  close when clicking outside the menu
  useEffect(() => {
    if (!isStartOpen) return;

    const onMouseDown = (e: MouseEvent) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target as Node)) {
        closeStart();
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeStart();
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    }; 
  }, [isStartOpen, closeStart]);

  if (!isStartOpen) return null;

  const launch = (app: "about" | "projects" | "resume") => {
    openWindow(app);
    closeStart();
  };

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Panel anchored above taskbar, bottom-left */}
      <div
        ref={panelRef}
        className="
          absolute left-1/2 bottom-14 -translate-x-1/2
          w-155 h-180
          rounded-2xl
          border border-white/10
          bg-black/50 backdrop-blur-xl
          shadow-2xl
          overflow-hidden
        "
      >
        {/* Top: search */}
      <div className="p-4 pt-6">
        <div className="relative">
          {/* search icon */}
          <img
            src="/icons/desktop/search.png"
            alt=""
            className="
              pointer-events-none
              absolute left-3 top-1/2 -translate-y-1/2
              h-4 w-4 opacity-80
            "
          />

          {/* input */}
          <input
            placeholder="Search for apps, settings, and documents"
            className="
              h-8 w-full
              rounded-full
              bg-white/10
              pl-10 pr-10
              text-sm text-white
              placeholder:text-white/50
              outline-none
              ring-1 ring-white/10
              transition
              hover:ring-white/20
              focus:ring-2 focus:ring-white/25
            "
          />
        </div>
      </div>


        {/* Body */}
        <div className="p-4">
          <div className="text-sm text-white/70 mb-3">Pinned</div>

          <div className="grid grid-cols-3 gap-3">
            <StartTile
              icon="/icons/app/about-me.png"
              label="About"
              onClick={() => launch("about")}
            />
            <StartTile
              icon="/icons/app/folder-icon.png"
              label="Projects"
              onClick={() => launch("projects")}
            />
            <StartTile
              icon="/icons/app/resume.png"
              label="Resume"
              onClick={() => launch("resume")}
            />
          </div>

          <div className="mt-6 text-sm text-white/70 mb-3">Recommended</div>
          <div className="space-y-2">
            <RecommendedRow image="../icons/app/levelup-meds.png" label="LevelUp Meds" sub="Next.js • AWS • UI work" />
            <RecommendedRow image="../icons/app/algorithm_visualizer.png"  label="Algorithm Visualizer" sub="React • DSA" />
          </div>
        </div>

        {/* Bottom: profile + power */}
        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-white/10 flex items-center justify-between bg-black/50">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 group">
            <div className="h-7 w-7 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center">
              <img src="/icons/app/profile_user_icon.png" className="h-4 w-4" alt="user" />
            </div>
            <span className="text-sm text-white/80">Ibigoni Inye-Tam</span>
          </button>

          <div className="relative group">
            <button
              className="px-3 py-2 rounded-lg hover:bg-white/10"
              onClick={toggleFullScreen}
              aria-label="Fullscreen"
            >
              <img src="/icons/desktop/power_button.png" className="h-5 w-5" alt="power" />
            </button>
            <div className="
              pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2
              whitespace-nowrap rounded-md bg-black/50 backdrop-blur
              px-2 py-2 text-xs text-white
              opacity-0 translate-y-1
              group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-150
              ring-1 ring-white/10
            ">Fullscreen</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StartTile({
  icon, 
  label,
  onClick,
}: {
  icon: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <button 
      onClick={onClick}
      className="
        flex flex-col items-center justify-center h-24 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition
      "
    >
      <img src={icon} alt="" className="h-9 w-9 mb-2 opacity-90" />
      <span className="text-sm">{label}</span>
    </button>
  );
}

function RecommendedRow({ label, sub, image }: { label: string; sub: string; image?: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2">
      {image && (
          <img 
          src={image} 
          alt={label}
          className="h-9 w-9 rounded-lg object-contain"
          />
        )}
      <div>
        <div className="text-sm">{label}</div>
        <div className="text-xs text-white/60">{sub}</div>
      </div>
    </div>
  );
}
