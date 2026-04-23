export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 pt-16 overflow-hidden grain">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(201,165,61,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
        {/* Label */}
        <div className="animate-fade-in opacity-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1a1a1a] bg-[#0e0e0e] text-xs text-[#6b6b6b] tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a53d] animate-pulse" />
          Available for projects · Nairobi, Kenya
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up opacity-0 delay-100 text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-none mb-4">
          Purity{' '}
          <span className="gold-gradient">Ngugi</span>
        </h1>

        {/* Role */}
        <p className="animate-fade-in-up opacity-0 delay-200 text-base sm:text-lg lg:text-xl text-[#6b6b6b] tracking-widest uppercase mb-6">
          Creative Video Editor&nbsp;&nbsp;·&nbsp;&nbsp;Content Strategist
        </p>

        {/* Tagline */}
        <p className="animate-fade-in-up opacity-0 delay-300 max-w-2xl mx-auto text-base sm:text-lg text-[#a0998e] leading-relaxed mb-10">
          A financial analyst&apos;s obsession with performance data meets cinematic storytelling.
          Engineering content that measurably increases watch-time and audience retention.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up opacity-0 delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#work"
            className="px-8 py-3.5 rounded-full bg-[#c9a53d] text-[#070707] font-semibold text-sm tracking-wide hover:bg-[#e8c45e] transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-[#1a1a1a] text-[#a0998e] text-sm tracking-wide hover:border-[#c9a53d]/40 hover:text-[#f0ece4] transition-all"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats row */}
        <div className="animate-fade-in-up opacity-0 delay-500 grid grid-cols-3 max-w-lg mx-auto gap-6 mb-16">
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '10+', label: 'Tools Mastered' },
            { value: '3', label: 'Platforms' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#c9a53d] mb-1">{s.value}</div>
              <div className="text-xs text-[#6b6b6b] tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Platform icons */}
        <div className="animate-fade-in-up opacity-0 delay-600 flex items-center justify-center gap-6">
          <span className="text-xs text-[#3a3a3a] tracking-widest uppercase">Find me on</span>
          {[
            { label: 'YouTube', href: 'https://youtube.com/@purity_ngugi', color: '#FF0000' },
            { label: 'TikTok', href: 'https://www.tiktok.com/@purityy_ngugi', color: '#69C9D0' },
            { label: 'Instagram', href: 'https://www.instagram.com/purityy_ngugi', color: '#E1306C' },
          ].map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#6b6b6b] hover:text-[#f0ece4] transition-colors tracking-wide"
              style={{ '--accent': p.color } as React.CSSProperties}
            >
              {p.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-[#3a3a3a] tracking-widest uppercase">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M3 9l5 5 5-5" stroke="#3a3a3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
