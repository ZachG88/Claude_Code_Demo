const skillGroups = [
  {
    category: 'Data Science & ML',
    icon: '◈',
    skills: ['Python', 'Scikit-learn', 'Keras / XGBoost', 'NLTK / spaCy', 'PySpark', 'R'],
  },
  {
    category: 'Analytics & Visualization',
    icon: '◉',
    skills: ['Tableau', 'Power BI', 'Looker', 'Matplotlib / Seaborn', 'D3.js', 'Google Analytics'],
  },
  {
    category: 'Data Engineering',
    icon: '◌',
    skills: ['SQL', 'BigQuery', 'Databricks', 'Alteryx', 'Docker', 'Teradata'],
  },
  {
    category: 'Software & Tools',
    icon: '◎',
    skills: ['Java', 'JavaScript / CSS', 'Git', 'Azure DevOps', 'Neo4j', 'Jupyter'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#080e0b]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#5aab6f] text-sm tracking-widest uppercase mb-3 font-medium">Capabilities</p>
          <h2 className="text-4xl font-bold text-[#e8eef2]">Skills & Technologies</h2>
          <p className="mt-4 text-[#7a99a8] max-w-xl mx-auto">
            A toolkit built across industry experience, academic research, and personal projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-[#0d1a12] border border-[#1a3a23] rounded-xl p-6 hover:border-[#254f30] transition-all duration-200 hover:shadow-lg hover:shadow-[#112316]/50 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[#5aab6f] text-xl group-hover:text-[#88c99a] transition-colors">
                  {group.icon}
                </span>
                <h3 className="text-[#c8d6de] font-semibold text-sm tracking-wide uppercase">
                  {group.category}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5 text-[#7a99a8] text-sm">
                    <span className="w-1 h-1 rounded-full bg-[#254f30] flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
