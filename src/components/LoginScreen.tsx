"use client";

import { useState } from "react";
import { useSessionStore } from "../state/sessionStore";

export default function LoginScreen() {
  const login = useSessionStore((s) => s.login);

  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

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
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <img 
        src="../icons/account_login.png" alt="user" 
        className="h-12 w-12" 
        />
        
        {/* username */}
        <div className="text-center">
          <div className="text-xl font-semibold">{username}</div>
          <div className="mt-1 text-sm text-white/70">Enter your PIN</div>
        </div>

        {/* form */}
        <form onSubmit={onSubmit} className="mt-5 space-y-3">
          <input 
            type="password"
            inputMode="numeric"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="PIN"
            className="w-full rounded-lg bg-white/10 px-3 py-2 outline-none ring-1 ring-white/15 focus:ring-white/30 "
          />

          {error && (
            <div className="rounded-md bg-red-500/15 px-3 py-2 text-sm text-red-200 ring-1 ring-red-400/20">
              {error}
            </div>
          )}

          <button type="submit" className="w-full rounded-lg bg-white/15 py-2 font-medium hover:bg-white/20 active:bg-white/25" >
            <img
              src="../icons/arrow_right.png"
              alt="submit"
            />
          </button>
          
          <div className="text-center text-xs text-white/60">
            PIN is <span className="font-semibold">1234</span>
          </div>
        </form>
      </div>

      {/* system icons */}
      <div>
        <button>
          <img 
            src="../icons/wifi.png" alt="wifi" 
            className="h-5 w-5" 
          />  
        </button>
        <button>
          <img 
            src="../icons/accessibility.png" alt="accessibility" 
            className="h-5 w-5" 
          />   
        </button>
        <button>
          <img 
            src="../icons/power_button.png" alt="power" 
            className="h-5 w-5" 
          /> 
        </button>
      </div>
      {/* power icon (stretch goal: shuts off the program) */}
    </div>
  );
}