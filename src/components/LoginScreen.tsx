"use client";

import { useState } from "react";
import { useSessionStore } from "../state/sessionStore";

export default function LoginScreen() {
  const login = useSessionStore((s) => s.login);

  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const username = "Ibigoni Inye-Tam";
  const UNIQUE_PASSWORD = "1234";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === UNIQUE_PASSWORD) {
      setError(null);
      login(username);
    } else {
      setError("Incorrect PIN. Try 1234");
      setPassword("");
    }
  };

  return (
    <div className="absolute inset-0 text-white">
    {/* background */}
    <div className="absolute inset-0 bg-[url('/wallpaper/bg-lockscreen.jpg')] bg-cover bg-center" />

      {/* middle container */}
      <div className="relative flex-col z-10 flex  h-full items-center justify-center px-4">
        <img 
        src="../icons/desktop/account_login.png" alt="user" 
        className="h-12 w-12" 
        />
        
        {/* username */}
        <div className="text-center">
          <div className="text-xl font-semibold">{username}</div>
          <div className="mt-1 text-sm text-white/70">Enter your PIN</div>
        </div>

        {/* form */}
        <form onSubmit={onSubmit} className="mt-5 space-y-3">
          <div className="relative h-10 w-full">
            <input 
              type="password"
              inputMode="numeric"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="PIN"
              className="h-10 w-full rounded-md bg-white/10 px-3 pr-12 text-white outline-none ring-1 placeholder:text-white/50 ring-white/15 focus:ring-2 focus:ring-white/30 "
            />
            <button type="submit" className="absolute right-1 top-1 flex items-center justify-center h-8 w-10 py-2 font-medium hover:bg-white/15 active:bg-white/20" 
            aria-label="Submit"
            >
            <img
              src="../icons/desktop/arrow_right.png"
              className="h-6 w-6 opacity-90"
            />
            </button>
          </div>

          {error && (
            <div className="rounded-md bg-red-500/15 px-3 py-2 text-sm text-red-200 ring-1 ring-red-400/20">
              {error}
            </div>
          )}
          
          <div className="text-center text-xs text-white/60">
            PIN is <span className="font-semibold">1234</span>
          </div>
        </form>
      </div>

      {/* system icons */}
      <div className="fixed bottom-4 right-4 z-20 flex gap-2">
        {/* WiFi */}
        <div className="relative group">
          <button
            className="rounded-md p-2 hover:bg-white/10"
            type="button"
            aria-label="Internet"
          >
            <img
              src="/icons/desktop/wifi-icon.webp"
              alt=""
              className="h-5 w-5 opacity-90"
            />
          </button>

          <div
            className="
              pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2
              whitespace-nowrap rounded-md bg-black/50 backdrop-blur
              px-2 py-2 text-xs text-white
              opacity-0 translate-y-1
              group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-300
              ring-1 ring-white/10
            "
          >
            Internet
          </div>
        </div>

        {/* Accessibility */}
        <div className="relative group">
          <button
            className="rounded-md p-2 hover:bg-white/10"
            type="button"
            aria-label="Accessibility"
          >
            <img
              src="/icons/desktop/accessibility-icon.png"
              alt=""
              className="h-5 w-5 opacity-90"
            />
          </button>

          <div
            className="
              pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2
              whitespace-nowrap rounded-md bg-black/50 backdrop-blur
              px-2 py-2 text-xs text-white
              opacity-0 translate-y-1
              group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-300
              ring-1 ring-white/10
            "
          >
            Accessibility
          </div>
        </div>

        {/* Fullscreen */}
        <div className="relative group">
          <button
            onClick={toggleFullScreen}
            className="rounded-md p-2 hover:bg-white/10"
            type="button"
            aria-label="Toggle Fullscreen"
          >
            <img
              src="/icons/desktop/power_button.png"
              alt=""
              className="h-5 w-5 opacity-90"
            />
          </button>

          <div
            className="
              pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2
              whitespace-nowrap rounded-md bg-black/50 backdrop-blur
              px-2 py-2 text-xs text-white
              opacity-0 translate-y-1
              group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-300
              ring-1 ring-white/10
            "
          >
            Fullscreen
          </div>
        </div>
      </div>


      {/* power icon triggers fullscreen mode and exist fullscreen mode */}
    </div>
  );
}