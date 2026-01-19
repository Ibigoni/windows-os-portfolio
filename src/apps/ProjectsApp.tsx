"use client";

import Image from "next/image";

export default function ProjectsApps() {
  return (
    <div className="space-y-4 text-white">
      <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
      

      {/* CARD */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/7 transition">
        <div className="font-medium">LevelUp Meds</div>
        <div className="text-sm text-white/70">
          Full-stack healthcare capstone app for caregivers
        </div>

        <div className="mt-2 flex items-center justify-between">
          {/* Tech stack */}
          <div className="flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-1">
            
            <div className="relative group">
              <a href="https://nextjs.org/docs" target="_blank" className="cursor-auto">
                <Image
                  src="/icons/Tech/nextjs-icon.png"
                  alt="Next.js"
                  width={20}
                  height={20}
                  className="h-5 w-5 rounded-full bg-white/80 object-contain hover:bg-transparent ease-in-out transition duration-300"
                />
              </a>
              <Tooltip>Next.js</Tooltip>
            </div>

            <Divider />

            <div className="relative group">
              <a href="https://docs.aws.amazon.com/" target="_blank" className="cursor-auto">
                <Image
                  src="/icons/Tech/aws.png"
                  alt="AWS"
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </a>
              <Tooltip>AWS</Tooltip>
            </div>
          </div>

          <span className="rounded-lg px-2 py-1 text-white/60">🔒</span>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/7 transition">
        <div className="font-medium">Algorithm Visualizer</div>
        <div className="text-sm text-white/70">
          Interactive sorting algorithm visualizer
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-1">
            
            {/* Tech stac */}
            <div className="relative group">
              <a href="https://react.dev/" target="_blank">
                <Image
                  src="/icons/Tech/reactjs_logo.png"
                  alt="React"
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain transition-transform duration-500 group-hover:rotate-180 cursor-auto"
                />
              </a>
              <Tooltip>React</Tooltip>
            </div>
          </div>

          <a
            href="https://github.com/Ibigoni/JavaScript_React_Project"
            target="_blank"
            className="rounded-lg px-2 py-1 text-white/70 hover:text-white hover:bg-white/10 transition"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/7 transition">
        <div className="font-medium">E-commerce App</div>
        <div className="text-sm text-white/70">
          Amazon-style storefront with cart and checkout flow
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-1">
            
            <div className="relative group">
              <a href="https://javascript.info/intro" target="_blank" className="cursor-auto">
                <Image
                  src="/icons/Tech/javascript-logo.png"
                  alt="JavaScript"
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain rounded-md"
                />
              </a>
              <Tooltip>JavaScript</Tooltip>
            </div>

            <Divider />

            <div className="relative group">
              <a href="https://web.dev/html" target="_blank" className="cursor-auto">
                <Image
                  src="/icons/Tech/html5.png"
                  alt="HTML"
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
              </a>
              <Tooltip>HTML</Tooltip>
            </div>

            <Divider />

            <div className="relative group">
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" className="cursor-auto">
                <Image
                  src="/icons/Tech/CSS_icon.png"
                  alt="CSS"
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
              </a>
              <Tooltip>CSS</Tooltip>
            </div>
          </div>

          <a
            href="https://github.com/Ibigoni/javascript-amazon-project"
            target="_blank"
            className="rounded-lg px-2 py-1 text-white/70 hover:text-white hover:bg-white/10 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}


function Tooltip({ children }: { children: string }) {
  return (
    <div
      className="
        pointer-events-none
        absolute bottom-full left-1/2 -translate-x-1/2 mb-2
        whitespace-nowrap rounded-md
        bg-zinc-900/90 backdrop-blur
        px-2 py-1 text-xs text-white
        opacity-0 translate-y-1
        group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-200
        ring-1 ring-white/10
      "
    >
      {children}
    </div>
  );
}

function Divider() {
  return <span className="h-3 w-px bg-white/15" />;
}
