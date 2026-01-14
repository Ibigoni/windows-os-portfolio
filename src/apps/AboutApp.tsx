export default function AboutApp() {
  return (
    <div className="space-y-4 text-white">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xl font-semibold"></h2>
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
    return {
      status: "Open to Internships & Entry-Level Roles",
      education: "Senior CS student at Purdue Fort Wayne",
      work: "Developing a healthcare web application (Capstone) using Next.js & AWS",
      interests: [
        "Frontend engineering",
        "UI/UX systems",
        "Scalable web applications"
      ]
    };
  }
  
  contact() {
    return {
      email: "inyetamibigoni@gmail.com",
      github: "github.com/ibigoni",
      linkedin: "linkedin.com/in/ibigoni-inye-tam-5376b2204/"
    };
  }
}`}
        </pre>
      </div>

    </div>
  );
}
