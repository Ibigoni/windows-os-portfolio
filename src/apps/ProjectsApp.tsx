"use client";

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
              <img
                src="/icons/tech/nextjs-icon.png"
                alt="Next.js"
                className="h-5 w-5 rounded-full bg-white/80 object-contain"
              />
              <Tooltip>Next.js</Tooltip>
            </div>

            <Divider />

            <div className="relative group">
              <img
                src="/icons/tech/aws.png"
                alt="AWS"
                className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110"
              />
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
            
            {/* Tech stack */}
            <div className="relative group">
              <img
                src="/icons/tech/reactjs_logo.png"
                alt="React"
                className="h-5 w-5 object-contain transition-transform duration-500 group-hover:rotate-180"
              />
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
            
            {/* Tech stack */}
            <div className="relative group">
              <img
                src="/icons/tech/javascript-logo.png"
                alt="JavaScript"
                className="h-5 w-5 object-contain"
              />
              <Tooltip>JavaScript</Tooltip>
            </div>

            <Divider />

            <div className="relative group">
              <img
                src="/icons/tech/html5.png"
                alt="HTML"
                className="h-5 w-5 object-contain"
              />
              <Tooltip>HTML</Tooltip>
            </div>

            <Divider />

            <div className="relative group">
              <img
                src="/icons/tech/CSS_icon.png"
                alt="CSS"
                className="h-5 w-5 object-contain"
              />
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
