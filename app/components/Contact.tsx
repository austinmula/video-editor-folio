const socials = [
  {
    label: 'YouTube',
    handle: '@purity_ngugi',
    href: 'https://youtube.com/@purity_ngugi',
    description: 'Long-form video & cinematic edits',
  },
  {
    label: 'TikTok',
    handle: '@purityy_ngugi',
    href: 'https://www.tiktok.com/@purityy_ngugi',
    description: 'Short-form content & hooks',
  },
  {
    label: 'Instagram',
    handle: '@purityy_ngugi',
    href: 'https://www.instagram.com/purityy_ngugi',
    description: 'Brand content & reels',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 sm:px-10 lg:px-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-xs text-[#c9a53d] tracking-widest uppercase mb-3">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f0ece4] mb-6">
              Let&apos;s Create
              <br />
              <span className="gold-gradient">Together</span>
            </h2>
            <p className="text-[#6b6b6b] leading-relaxed mb-8 max-w-md">
              Open to freelance projects, brand collaborations, and full-time roles. Whether you
              need a cinematic long-form edit or a scroll-stopping short-form reel — let&apos;s talk.
            </p>

            <a
              href="mailto:ngugipurity0@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#c9a53d] text-[#070707] font-semibold text-sm hover:bg-[#e8c45e] transition-colors mb-10"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 4l6 5 6-5M2 4h12v9H2V4z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              ngugipurity0@gmail.com
            </a>

            <div className="flex items-center gap-2 text-sm text-[#6b6b6b]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1C4.79 1 3 2.79 3 5c0 3.5 4 8 4 8s4-4.5 4-8c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 1 1 7 3a1.5 1.5 0 0 1 0 3z" fill="currentColor" />
              </svg>
              Nairobi, Kenya · (+254) 0713 194 790
            </div>
          </div>

          {/* Right — social cards */}
          <div className="space-y-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl border border-[#1a1a1a] bg-[#0e0e0e] hover:border-[#c9a53d]/25 transition-all group"
              >
                <div>
                  <p className="text-xs text-[#6b6b6b] tracking-wide mb-1">{s.label}</p>
                  <p className="text-base font-semibold text-[#f0ece4] mb-0.5">{s.handle}</p>
                  <p className="text-xs text-[#6b6b6b]">{s.description}</p>
                </div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="text-[#3a3a3a] group-hover:text-[#c9a53d] transition-colors shrink-0"
                >
                  <path
                    d="M4 9h10M9 4l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#3a3a3a]">
        <p>© 2025 Purity Ngugi — Creative Video Editor & Content Strategist</p>
        <p>Nairobi, Kenya</p>
      </div>
    </section>
  )
}
