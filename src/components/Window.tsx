"use client";

import { useRef } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { useWindowsStore, WindowState } from "../state/windowsStore";

export default function Window({
  win,
  children,
}: {
  win: WindowState;
  children: React.ReactNode;
}) {
  const focusWindow = useWindowsStore((s) => s.focusWindow);
  const closeWindow = useWindowsStore((s) => s.closeWindow);
  const toggleMinimize = useWindowsStore((s) => s.toggleMinimize);
  const toggleMaximize = useWindowsStore((s) => s.toggleMaximize);
  const moveWindow = useWindowsStore((s) => s.moveWindow);

  const nodeRef = useRef<HTMLDivElement>(null);

  if (win.isMinimized) return null;

  const baseStyle: React.CSSProperties = win.isMaximized
    ? { top: 0, left: 0, width: "100vw", height: "calc(100vh - 48px)" }
    : { width: win.size.w, height: win.size.h };

  const content = (
    <div
      ref={nodeRef}
      className="absolute rounded-xl overflow-hidden border border-white/10 bg-zinc-900/90 backdrop-blur text-white shadow-2xl"
      style={{ ...baseStyle, zIndex: win.zIndex }}
      onPointerDown={() => focusWindow(win.id)}
    >
      <div className="h-10 flex items-center justify-between px-3 bg-zinc-950/70 border-b border-white/10 select-none cursor-move">
        <div className="text-sm font-medium">{win.title}</div>

        <div className="flex gap-2">
          <button
            className="w-8 h-7 rounded hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              toggleMinimize(win.id);
            }}
            aria-label="Minimize"
          >
            &#128469;
          </button>

          <button
            className="w-8 h-7 rounded hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              toggleMaximize(win.id);
            }}
            aria-label="Maximize"
          >
            &#128470;
          </button>

          <button
            className="w-8 h-7 rounded hover:bg-red-500/70"
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(win.id);
            }}
            aria-label="Close"
          >
            &#128473;
          </button>
        </div>
      </div>

      <div className="h-[calc(100%-40px)] p-4 overflow-auto">{children}</div>
    </div>
  );

  if (win.isMaximized) return content;

  const { x, y } = win.position;

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".cursor-move"
      defaultPosition={{ x, y }}
      onStop={(_: DraggableEvent, data: DraggableData) => {
        moveWindow(win.id, data.x, data.y);
      }}
    >
      {content}
    </Draggable>
  );
}
