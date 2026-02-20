export default function Footer() {
  return (
    <footer className="bg-[#080e0b] border-t border-[#112316] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[#3d8a52] font-bold text-lg tracking-tight">ZG</span>
        <p className="text-[#254f30] text-sm">
          © {new Date().getFullYear()} Zach Gendreau · Seattle, WA
        </p>
        <p className="text-[#1a3a23] text-xs">Built with React & Tailwind</p>
      </div>
    </footer>
  )
}
