const projects = [
  {
    title: 'ML Classification Project',
    description:
      'End-to-end machine learning pipeline for a classification task. Includes feature engineering, model selection, hyperparameter tuning, and evaluation using scikit-learn and PyTorch.',
    tags: ['Python', 'scikit-learn', 'PyTorch', 'Jupyter'],
    github: 'https://github.com/ZachG88',
    live: null,
    featured: true,
  },
  {
    title: 'Data Analysis Dashboard',
    description:
      'Interactive exploratory data analysis tool built with Python. Visualizes trends, distributions, and correlations in large datasets with customizable filters.',
    tags: ['Python', 'Pandas', 'Plotly', 'SQL'],
    github: 'https://github.com/ZachG88',
    live: null,
    featured: true,
  },
  {
    title: 'UW Informatics Capstone',
    description:
      'Senior capstone project applying data science methods to a real-world problem. Combined data wrangling, statistical analysis, and data storytelling into a polished final deliverable.',
    tags: ['Python', 'R', 'Statistics', 'Visualization'],
    github: 'https://github.com/ZachG88',
    live: null,
    featured: true,
  },
  {
    title: 'Georgia Tech Coursework',
    description:
      'Projects and assignments from the OMSCS Machine Learning specialization, including implementations of core ML algorithms, neural networks, and data-driven trading strategies.',
    tags: ['Python', 'TensorFlow', 'ML', 'Georgia Tech'],
    github: 'https://github.com/ZachG88',
    live: null,
    featured: false,
  },
]

function GithubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#080e0b]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#5aab6f] text-sm tracking-widest uppercase mb-3 font-medium">Portfolio</p>
          <h2 className="text-4xl font-bold text-[#e8eef2]">Selected Projects</h2>
          <p className="mt-4 text-[#7a99a8] max-w-xl mx-auto">
            A selection of data science and analysis projects — academic, professional, and personal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-[#0d1a12] border border-[#1a3a23] rounded-xl p-6 hover:border-[#254f30] transition-all duration-200 hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#112316] border border-[#1a3a23] flex items-center justify-center text-[#5aab6f] group-hover:text-[#88c99a] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <div className="flex gap-3 text-[#56788a]">
                  {project.github && (
                    <a href={project.github} className="hover:text-[#88c99a] transition-colors" aria-label="GitHub">
                      <GithubIcon />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="hover:text-[#88c99a] transition-colors" aria-label="Live site">
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-[#c8d6de] group-hover:text-[#e8eef2] transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-[#56788a] text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-[#080e0b] border border-[#1a3a23] text-[#5aab6f]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
