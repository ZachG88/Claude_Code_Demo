export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080e0b] via-[#0d1a12] to-[#070d12]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top-right,_#112316_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom-left,_#0c1520_0%,_transparent_60%)]" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#88c99a 1px, transparent 1px), linear-gradient(90deg, #88c99a 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#254f30]/60 bg-[#112316]/60 text-[#5aab6f] text-sm tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5aab6f] animate-pulse" />
          Open to opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#e8eef2] mb-4 leading-none">
          Zach{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5aab6f] via-[#88c99a] to-[#6fa0be]">
            Gendreau
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-[#7a99a8] mb-6 font-light tracking-wide">
          Data Analyst &nbsp;·&nbsp; Aspiring Data Scientist &nbsp;·&nbsp; Seattle, WA
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-[#a0b8c4] text-lg leading-relaxed mb-12">
          Turning raw data into actionable insight from the Pacific Northwest. Currently
          a Data Analyst at Costco Wholesale and pursuing an M.S. in Computer Science
          (Machine Learning) at Georgia Tech.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-lg bg-[#2d6a3f] hover:bg-[#3d8a52] text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#2d6a3f]/30 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg border border-[#254f30] hover:border-[#3d8a52] text-[#88c99a] hover:text-[#c2e8cc] font-medium transition-all duration-200 hover:-translate-y-0.5 bg-[#112316]/40 hover:bg-[#112316]/80"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#254f30] animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
