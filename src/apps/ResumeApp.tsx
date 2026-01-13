export default function ResumeApp() {
  return (
    <div className="flex flex-col h-full gap-3">
      {/* Toolbar */}
      <div className="flex items-center gap-2">
        <a
          href="../resume/resume.pdf"
          target="_blank"
          className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-sm"
        >
          View PDF
        </a>
        <a
          href="../resume/resume.pdf"
          download
          className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-sm"
        >
          Download
        </a>
      </div>

      {/* Viewer */}
      <div className="flex-1 rounded-lg overflow-hidden border border-white/10 bg-white">
        <iframe
          src="../resume/Resume.pdf"
          className="w-full h-full"
        />
      </div>

      {/* Footer */}
      <div className="text-xs text-white/50">
        Last updated: Jan 2026
      </div>
    </div>
  );
}
