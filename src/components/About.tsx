export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0d1a12]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-[#5aab6f] text-sm tracking-widest uppercase mb-3 font-medium">About Me</p>
            <h2 className="text-4xl font-bold text-[#e8eef2] mb-6 leading-tight">
              Turning data into<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5aab6f] to-[#6fa0be]">
                decisions and discovery
              </span>
            </h2>
            <div className="space-y-4 text-[#a0b8c4] leading-relaxed">
              <p>
                I'm a Data Analyst at Costco Wholesale in Issaquah, WA, where I work on transforming
                complex datasets into clear, actionable insight. My work sits at the intersection of
                rigorous analysis and practical business impact.

              </p>
              <p>
                I hold a B.S. in Informatics with a focus in Data Science from the University of
                Washington, and I'm currently completing my M.S. in Computer Science with a
                specialization in Machine Learning at Georgia Tech.

              </p>
              <p>
                I care deeply about the full data lifecycle — from wrangling messy real-world data to
                deploying models that make a real difference. Outside of work, you'll find me running
                on the streets of Seattle, attending local concerts, or chasing down the best cup of coffee I can find.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-lg bg-[#112316] border border-[#254f30] text-[#88c99a] hover:border-[#3d8a52] hover:text-[#c2e8cc] text-sm font-medium transition-all duration-200"
              >
                Say Hello
              </a>
              <a
                href="#"
                className="px-6 py-2.5 rounded-lg text-[#7a99a8] hover:text-[#a0b8c4] text-sm font-medium transition-colors flex items-center gap-2"
              >
                Download CV
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Stats / Quick facts */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Current Role', value: 'Analyst' },
              { label: 'Employer', value: 'Costco' },
              { label: 'B.S. Informatics', value: 'UW' },
              { label: 'M.S. CS · ML', value: 'GT' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#080e0b] border border-[#1a3a23] rounded-xl p-6 hover:border-[#254f30] transition-colors group"
              >
                <div className="text-3xl font-bold text-[#88c99a] group-hover:text-[#c2e8cc] transition-colors mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[#56788a]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
