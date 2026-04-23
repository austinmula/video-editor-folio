const skillGroups = [
  {
    category: 'Video Editing',
    skills: [
      { name: 'DaVinci Resolve', note: 'Professional Colour Grading & Post-Production' },
      { name: 'CapCut Desktop', note: 'High-Retention Short-Form Editing' },
    ],
  },
  {
    category: 'AI-Video & Generative',
    skills: [
      { name: 'Kling AI', note: 'AI Video Generation & B-Roll' },
      { name: 'Higgsfield', note: 'Generative Visual Effects' },
      { name: 'ElevenLabs', note: 'Voice Synthesis' },
      { name: 'Midjourney', note: 'Visual Concept Generation' },
    ],
  },
  {
    category: 'Strategy & Analytics',
    skills: [
      { name: 'Audience Retention Analysis', note: null },
      { name: 'Hook Engineering', note: null },
      { name: 'Content Pillar Architecture', note: null },
      { name: 'Meta Business Suite', note: null },
      { name: 'Watch-Time Optimisation', note: null },
    ],
  },
  {
    category: 'Design & Production',
    skills: [
      { name: 'Canva Pro', note: 'Brand Assets, Thumbnails, Motion Graphics' },
      { name: 'Scripting & Storyboarding', note: null },
      { name: 'Colour Grading', note: null },
      { name: 'End-to-End Creative Pipeline', note: null },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 sm:px-10 lg:px-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs text-[#c9a53d] tracking-widest uppercase mb-3">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0ece4]">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-[#1a1a1a] bg-[#0e0e0e] p-6"
            >
              <h3 className="text-xs font-semibold tracking-widest uppercase text-[#c9a53d] mb-5">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((s) => (
                  <li key={s.name}>
                    <p className="text-sm font-medium text-[#f0ece4]">{s.name}</p>
                    {s.note && (
                      <p className="text-xs text-[#6b6b6b] mt-0.5 leading-snug">{s.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* What makes her different */}
        <div className="mt-12 rounded-2xl border border-[#c9a53d]/20 bg-[#0e0e0e] p-8 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-xs text-[#c9a53d] tracking-widest uppercase mb-4">The Edge</p>
            <p className="text-lg sm:text-xl text-[#f0ece4] font-medium leading-relaxed mb-4">
              A financial analyst who became a filmmaker.
            </p>
            <p className="text-[#a0998e] leading-relaxed">
              With a background in investment research and multi-currency financial management,
              every edit decision is treated as a business decision. Watch-time, hook performance,
              and engagement-rate data aren&apos;t afterthoughts — they&apos;re baked into the
              creative from the first frame.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
