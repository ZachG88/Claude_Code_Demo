const experiences = [
  {
    role: 'Data Analyst',
    company: 'Costco Wholesale',
    location: 'Issaquah, WA',
    period: 'Apr 2025 – Present',
    description:
      'Building self-service analytics and ML-powered tooling for eCommerce leadership at one of the world\'s largest membership-based retailers.',
    highlights: [
      'Designing and developing a full self-service Power BI platform for eCommerce leadership, refactoring 20+ Alteryx workflows',
      'Exploring and engineering fraud-detection features for an operational XGBoost ML deployment',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'Costco Wholesale',
    location: 'Issaquah, WA',
    period: 'Jan 2025 – Apr 2025',
    description:
      'Led an NLP/ML initiative to process internal customer feedback at enterprise scale, delivering product-level insights to buyers.',
    highlights: [
      'Processed >60M customer comments/year using distilled BERT for sentiment analysis and k-means clustering for product segmentation',
      'Leveraged LLMs for keyword extraction to surface actionable insights for enterprise buyers',
    ],
  },
  {
    role: 'Quality Systems Analyst Intern',
    company: 'The Boeing Company',
    location: 'Seattle, WA',
    period: 'Jun 2024 – Sep 2024',
    description:
      'Applied NLP and enterprise LLMs to improve non-conformance report analysis, winning First Place at the Boeing Total Quality Hackathon.',
    highlights: [
      'Designed and implemented NLP-based 3D data visualizations for non-conformance reports with 98% accuracy — a 2× improvement',
      'Enhanced data quality using enterprise LLMs and few-shot prompting techniques',
      '🏆 First Place, Boeing Total Quality Hackathon (2024)',
    ],
  },
  {
    role: 'Teaching Assistant — INFO 340 & 380',
    company: 'UW Information School',
    location: 'Seattle, WA',
    period: 'Feb 2024 – Jun 2025',
    description:
      'Supported 70+ students across two technical courses in front-end development and product management.',
    highlights: [
      'Conducted code reviews, led office hours and labs, and created teaching materials',
      'Courses covered full-stack web development and product management fundamentals',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#0d1a12]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#5aab6f] text-sm tracking-widest uppercase mb-3 font-medium">Career</p>
          <h2 className="text-4xl font-bold text-[#e8eef2]">Experience & Education</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#254f30] via-[#1a3a23] to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.role + exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-[#2d6a3f] border-2 border-[#88c99a] shadow-[0_0_8px_#2d6a3f]" />

                {/* Spacer on alternating side */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="md:w-1/2 pl-8 md:pl-0 md:pr-0">
                  <div
                    className={`bg-[#080e0b] border border-[#1a3a23] rounded-xl p-6 hover:border-[#254f30] transition-all duration-200 hover:shadow-lg hover:shadow-black/40 ${
                      i % 2 === 0 ? 'md:ml-10' : 'md:mr-10'
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-[#e8eef2]">{exp.role}</h3>
                      <span className="text-xs text-[#56788a] bg-[#0d1a12] border border-[#1a3a23] rounded-full px-3 py-1">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[#5aab6f] text-sm font-medium mb-1">{exp.company}</p>
                    <p className="text-[#56788a] text-xs mb-4">{exp.location}</p>
                    <p className="text-[#7a99a8] text-sm leading-relaxed mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5 text-sm text-[#56788a]">
                          <span className="text-[#3d8a52] mt-0.5 flex-shrink-0">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
