"use client";

import StartMenu from "./StartMenu";
import { useWindowsStore } from "../state/windowsStore";
import { useUIStore } from "@/state/uiStore";


export default function Taskbar() {
  const windows = useWindowsStore((s) => s.windows);
  const focusWindow = useWindowsStore((s) => s.focusWindow);
  const toggleMinimize = useWindowsStore((s) => s.toggleMinimize);
  const toggleStart = useUIStore((s) => s.toggleStart);
  const closeStart = useUIStore((s) => s.closeStart);
  const isStartOpen = useUIStore((s) => s.isStartOpen);

  const APP_ICON: Record<string, string> = {
    about: "/icons/app/profile.png",
    projects: "/icons/app/File_Explorer_logo.png",
    resume: "/icons/app/resume.png",
  };

  const handleStart = () => {
    if (isStartOpen) {
      closeStart();
    } else {
      toggleStart();
    }
  };

  const now = new Date();
  const dateString = now.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const onTaskClick = (id: string, isMinimized: boolean) => {
    // Windows behavior:
    // - if minimized -> restore + focus
    // - if not minimized then minimize
    if (isMinimized) focusWindow(id);
    else toggleMinimize(id);
  };

  return (
    <>
      <StartMenu />

      <div className="fixed bottom-0 left-0 right-0 z-[70] h-12 text-white">
        <div className="h-12 w-full border-t border-white/10 bg-zinc-950/90 backdrop-blur">
          {/* 3 columns: left (clock area width), center (start/search/apps), right (tray/clock) */}
          <div className="h-full grid grid-cols-[220px_1fr_220px] items-center px-3">

            {/* LEFT (empty spacer so center stays centered) */}
            <div />

            {/* CENTER: Start + Search + Open apps */}
            <div className="flex items-center justify-center gap-2 min-w-0">

              {/* Start */}
              <button
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  handleStart();
                }}
                className="h-10 w-10 rounded-xl hover:bg-white/10 active:bg-white/15 flex items-center justify-center"
                aria-label="Start"
              >
                <img
                  src="/icons/desktop/windows-icon.png"
                  alt="Start"
                  className="w-6 h-6 object-contain"
                />
              </button>

              {/* Search */}
              <div className="h-8 w-[260px] flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/10 focus-within:ring-white/20 px-3">
                <img
                  src="/icons/desktop/search.png"
                  alt="Search"
                  className="w-4 h-4 object-contain opacity-90"
                />
                <input
                  type="text"
                  className="bg-transparent outline-none flex-1 text-sm placeholder:text-white/55 min-w-0"
                  placeholder="Search"
                />
              </div>

              {/* Open apps (icons) */}
              <div className="flex items-center gap-1 max-w-[520px] overflow-x-auto scrollbar-none min-w-0">
                <button className="
                relative h-10 w-10 rounded-md flex items-center justify-center hover:bg-white/10 active:bg-white/15 transition
                ">
                  <a href="https://copilot.microsoft.com/" target="_blank" className="cursor-auto">
                    <img 
                    src="../icons/app/Copilot-icon.png" 
                    alt="copilot" 
                    className="h-6 w-6 object-contain" />
                  </a>
                </button>
                <button className="
                relative h-10 w-10 rounded-md flex items-center justify-center hover:bg-white/10 active:bg-white/15 transition
                ">
                  <a href="https://apps.microsoft.com/home?hl=en-US&gl=US" target="_blank" className="cursor-auto">
                    <img 
                    src="../icons/app/microsoft-store-icon.png" 
                    alt="copilot" 
                    className="h-6 w-6 object-contain" />
                  </a>
                </button>
                {windows.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => onTaskClick(w.id, w.isMinimized)}
                    className={[
                      "relative h-10 w-10 rounded-md flex items-center justify-center",
                      "hover:bg-white/10 active:bg-white/15 transition",
                      w.isMinimized ? "opacity-70" : "opacity-100",
                    ].join(" ")}
                    title={w.title}
                    aria-label={w.title}
                  >
                    <img
                      src={APP_ICON[w.app] ?? "/icons/desktop/app.png"}
                      alt={w.title}
                      className="h-6 w-6 object-contain"
                    />

                    {/* active underline */}
                    <span
                      className={[
                        "absolute bottom-1 left-1/2 -translate-x-1/2 h-[3px] rounded-full transition-all",
                        w.isMinimized ? "w-0" : "w-4 bg-white/60",
                      ].join(" ")}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: System tray + clock */}
            <div className="flex items-center justify-end gap-3">
              <div className="flex items-center gap-2 px-2 py-2 rounded-xl hover:bg-white/10">
                <img src="/icons/desktop/wifi-icon.webp" alt="WiFi" className="w-4 h-4 object-contain opacity-90" />
                <img src="/icons/desktop/volume_up.png" alt="Volume" className="w-4 h-4 object-contain opacity-90" />
                <img src="/icons/desktop/battery.png" alt="Battery" className="w-4 h-4 object-contain opacity-90" />
              </div>

              <button className="px-3 py-2 rounded-xl hover:bg-white/10 text-xs leading-tight text-right">
                <div>{timeString}</div>
                <div className="text-white/70">{dateString}</div>
              </button>
            </div>

          </div>
        </div>
      </div>

    </>
  );
}
