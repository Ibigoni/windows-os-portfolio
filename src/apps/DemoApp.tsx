// "use client";

// import { useWindowsStore } from "@/state/windowsStore";

// export default function DemoApp({ windowId }: { windowId: string }) {
//   const win = useWindowsStore((s) => s.windows.find((w) => w.id === windowId));
//   const demo = win?.payload?.demo;

//   if (!demo) {
//     return <div className="text-white/80">No demo attached to this window.</div>
//   }

//   return (
//     <div className="h-full flex flex-col gap-3 p-4">
//       {/* header */}
//       <div>
//         <div>
//           <a href={demo.demoURL}>
//             <button className="">Try it out yourself</button>
//           </a>
//           <p className="text-sm text-white/60">{win.title} Demo preview </p>
//         </div>
//         <a 
//         href={demo.repoURL} target="_blank">
//           Repository
//         </a>
//       </div>
//     </div>
//   );
// }