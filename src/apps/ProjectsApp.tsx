"use client";

import { useWindowsStore } from "@/state/windowsStore";

export default function ProjectsApps() {
  const openWindow = useWindowsStore((s) => s.openWindow);
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
      

      {/* CARD */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/7 transition" onClick={() =>{openWindow} }>
        <div className="font-medium">LevelUp Meds</div>
        <div className="text-sm text-white/70">Full-stack healthcare capstone app for caregivers</div>
        <div className="mt-2 flex items-center justify-between gap-3 text-sm text-white/70">
          {/* tech row */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-1">
              <a href="https://nextjs.org/docs" target="_blank" className="cursor-auto">
                <img
                  src="/icons/tech/nextjs-icon.png"
                  alt="Next.js"
                  title="Next.js"
                  className="h-5 w-5 object-contain hover:{title} bg-white/80 hover:bg-transparent rounded-full  transition duration-300"
                />
              </a>
              <span className="h-3 w-px bg-white/15" />
              <a href="https://docs.aws.amazon.com/" target="_blank" className="cursor-auto">
                <img
                  src="/icons/tech/aws.png"
                  alt="AWS"
                  title="AWS"
                  className="h-5 w-5 object-contain  scale-130 p-[2px] transition-transform duration-300 ease-out
                  hover:scale-150 p-[2px] hover:[title]"
                />
              </a>
            </div>
          </div>

          {/* repo link */}
          <a
            title="No link"
            className="rounded-lg px-2 py-1 text-white/70 hover:text-white hover:bg-white/10 transition hover:[title]"
          >
            🔒
          </a>
        </div>
      </div>

      {/* CARD */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/7 transition">
        <div className="font-medium">Algorithm Visualizer</div>
        <div className="text-sm text-white/70">Interactive sorting algorithm visualizer</div>
        <div className="mt-2 flex items-center justify-between gap-3 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-1">
              <a href="https://react.dev/" target="_blank">
                <img
                  src="/icons/tech/reactjs_logo.png"
                  alt="React"
                  title="React"
                  className="h-5 w-5 object-contain transition-transform duration-500 ease-in-out hover:rotate-180 cursor-auto"
                />
              </a>
            </div>
          </div>

          <a
            href="https://github.com/Ibigoni/JavaScript_React_Project"
            target="_blank"
            title="Link to live demo"
            className="rounded-lg px-2 py-1 text-white/70 hover:text-white hover:bg-white/10 transition hover:[title]"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* CARD */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/7 transition">
        <div className="font-medium">E-commerce App</div>
        <div className="text-sm text-white/70">Amazon-style storefront with cart and order flow</div>
        <div className="mt-2 flex items-center justify-between gap-3 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-1">
              <a href="https://javascript.info/intro" target="_blank" className="cursor-auto">
                <img
                  src="/icons/tech/javascript-logo.png"
                  alt="JavaScript"
                  title="JavaScript"
                  className="h-5 w-5 object-contain hover:[title]"
                />
              </a>
              <span className="h-3 w-px bg-white/15" />
              <a href="https://web.dev/html" target="_blank" className="cursor-auto">
                <img
                  src="/icons/tech/html5.png"
                  alt="HTML"
                  title="HTML"
                  className="h-5 w-5 object-contain hover:[title]"
                />
              </a>
              <span className="h-3 w-px bg-white/15" />
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" className="cursor-auto">
                <img
                  src="/icons/tech/CSS_icon.png"
                  alt="CSS"
                  title="CSS"
                  className="h-5 w-5 object-contain hover:[title] "
                />
              </a>
            </div>
          </div>

          <a
            href="https://github.com/Ibigoni/javascript-amazon-project"
            target="_blank"
            title="Link to live demo"
            className="rounded-lg px-2 py-1 text-white/70 hover:text-white hover:bg-white/10 transition hover:[title]"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
