const experience = [
  {
    title: 'Content Creator & Social Media Strategist',
    org: 'Self-Employed / Consultant',
    period: 'July 2023 – Present',
    type: 'work',
    bullets: [
      'End-to-end video productions using DaVinci Resolve for professional colour grading across long and short-form formats.',
      'Integrated Kling AI and Higgsfield into production workflows — cutting production time while elevating visual quality.',
      'Synthesised voice-over assets via ElevenLabs and visual concepts in Midjourney for solo broadcast-quality output.',
      'Analysed watch-time, hook performance, and engagement data in Meta Business Suite to re-engineer content for measurably higher retention.',
      'Collaborated with brands on video briefs, translating business goals into creative strategies with defined KPIs.',
    ],
  },
  {
    title: 'Investment Research & Content Associate',
    org: 'Lt Advisors · Nairobi, Kenya',
    period: 'January 2025 – Present',
    type: 'work',
    bullets: [
      'Produced video and digital content translating complex investment research into clear, visually engaging formats for web and social.',
      'Managed CMS content pipeline with 100% publication accuracy, maintaining brand standards and digital performance targets.',
      'Collaborated cross-functionally with research and leadership teams to align video concepts with business objectives.',
    ],
  },
  {
    title: 'Accountant',
    org: 'Ngeni Io Limited',
    period: 'July 2022 – October 2024',
    type: 'work',
    bullets: [
      'Managed multi-currency financial reporting and crypto-payroll across Kenya, Uganda, and Rwanda.',
      'Delivered internal audit and compliance reporting (PAYE/WHT) with zero-error standards.',
    ],
  },
]

const education = [
  { title: 'Bachelor of Commerce (Accounting)', org: 'Kenyatta University', year: '2022' },
  { title: 'Certified Public Accountant (CPA) — Part 1', org: 'Summit Institute', year: '2022' },
  { title: 'Certificate in Intellectual Property', org: 'World Intellectual Property Organization (WIPO)', year: '2021' },
  { title: 'AI for Content Creators', org: 'Specialised Certification', year: 'Ongoing' },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs text-[#c9a53d] tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0ece4]">Experience</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-0">
            {experience.map((item, i) => (
              <div key={i} className="relative pl-6 pb-10 border-l border-[#1a1a1a] last:border-transparent">
                {/* Dot */}
                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full border-2 border-[#c9a53d] bg-[#070707]" />

                <div className="mb-4">
                  <h3 className="text-base font-semibold text-[#f0ece4] mb-1">{item.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-[#a0998e]">{item.org}</span>
                    <span className="text-[#3a3a3a]">·</span>
                    <span className="text-[#c9a53d]/80">{item.period}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-sm text-[#6b6b6b] leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#3a3a3a] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education sidebar */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#6b6b6b] mb-6">
              Education & Certifications
            </h3>
            <div className="space-y-4">
              {education.map((e, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-[#1a1a1a] bg-[#0e0e0e]"
                >
                  <p className="text-sm font-medium text-[#f0ece4] mb-1">{e.title}</p>
                  <p className="text-xs text-[#6b6b6b]">{e.org}</p>
                  <p className="text-xs text-[#c9a53d]/70 mt-1">{e.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
