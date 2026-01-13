export default function AboutApp() {
  return (
    <div className="space-y-4 text-white">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xl font-semibold">About</h2>
        <span className="font-mono text-xs text-white/50">about.ts</span>
      </div>

      <div className="rounded-xl border border-white/10 bg-black/30 p-4">
        <pre className="font-mono text-sm leading-relaxed text-white/85 whitespace-pre-wrap">
{`class Developer {
  name = "Ibigoni Inye-Tam";
  role = "Computer Science student";
  focus = "Frontend & Full-Stack development";

  stack = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "AWS",
    "SQL",
    "Git"
  ];

  currently() {
    return [
      "Building a Windows-style portfolio with Next.js",
      "Working on a healthcare capstone project using AWS",
      "Improving UI architecture and state management"
    ];
  }
  
  contact() {
    return [
      "Email: Inyetamibigoni@gmail.com",
    ];
  }
}`}
        </pre>
      </div>

      <p className="text-sm text-white/70">
        This portfolio uses a Windows-style interface to showcase my projects,
        skills, and the way I think about building user experiences.
      </p>
    </div>
  );
}
