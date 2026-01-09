"use client";

import Window from "./Window";
import { useWindowsStore } from "../state/windowsStore";
import AboutApp from "../apps/AboutApp";
import ProjectsApps from "../apps/ProjectsApp";
import ResumeApp from "../apps/ResumeApp";


/**
 * Renders a collection of application windows based on the windows state from the store.
 * Each window displays a different application component depending on the `app` property:
 * - "about" renders the AboutApp component
 * - "projects" renders the ProjectApps component
 * - "resume" renders the ResumeApp component
 * 
 * @component
 * @returns {JSX.Element} A fragment containing all active windows with their respective applications
 */
export default function WindowManager() {
  const windows = useWindowsStore((s) => s.windows);

  return (
    <>
      {windows.map((w) => (
        <Window key={w.id} win={w}>
          {w.app === "about" && <AboutApp />}
          {w.app === "projects" && <ProjectsApps />}
          {w.app === "resume" && <ResumeApp />}
        </Window>
      ))}
    </>
  );
  
}