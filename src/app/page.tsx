"use client";

import Desktop from "@/components/Desktop";
import Taskbar from "@/components/Taskbar";
import WindowManager from "@/components/WindowManager";
import LoginScreen from "@/components/LoginScreen";
import { useSessionStore } from "@/state/sessionStore";

export default function Home() {
  const isLoggedIn = useSessionStore((s) => s.isLoggedIn);

  if (!isLoggedIn) return <LoginScreen />;

  return (
    <main className="w-screen h-screen overflow-hidden bg-[url('/wallpaper/bg-windows.jpg')] bg-cover bg-center bg-no-repeat">
      <Desktop />
      <WindowManager />
      <Taskbar />
    </main>
  );
}
