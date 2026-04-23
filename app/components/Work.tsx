'use client'

import { useState } from 'react'

type Platform = 'youtube' | 'tiktok' | 'instagram'

interface Project {
  id: number
  title: string
  description: string
  platform: Platform
  tools: string[]
  videoId?: string
  link: string
  category: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Trailer Teaser|AD for my YouTube post( Just DO It )',
    description:
      'End-to-end production using DaVinci Resolve for professional colour grading with AI-generated b-roll from Kling AI. Scripted, filmed, edited and delivered to broadcast quality.',
    platform: 'youtube',
    tools: ['DaVinci Resolve', 'Kling AI', 'ElevenLabs'],
    videoId: 'iqnN3zizJo0',
    link: 'https://www.youtube.com/watch?v=iqnN3zizJo0',
    category: 'Long-Form',
  },
  {
    id: 2,
    title: 'Investment Market Weekly Breakdown',
    description:
      'Complex financial and market data translated into compelling visual narratives. Colour graded and exported for web, with structured watch-time analysis baked into the edit.',
    platform: 'youtube',
    tools: ['DaVinci Resolve', 'Midjourney', 'Meta Business Suite'],
    link: 'https://www.youtube.com/watch?v=J1eR9bwthrY',
    category: 'Finance Content',
  },
  {
    id: 7,
    title: 'Cinematic Short Film Edit',
    description:
      'Professional colour grade and post-production finishing using DaVinci Resolve. Atmospheric grade with precise skin-tone control and stylised LUT work.',
    platform: 'youtube',
    tools: ['DaVinci Resolve', 'Kling AI'],
    link: 'https://www.youtube.com/watch?v=cBA-b8iVXVg',
    category: 'Colour Grade',
  },
  {
    id: 3,
    title: 'High-Retention Finance Hook',
    description:
      'Short-form edit engineered around proven hook formulas and pattern interrupts. Drop-off points identified via retention analysis and re-cut until scroll-stopping.',
    platform: 'tiktok',
    tools: ['CapCut', 'Hook Engineering', 'Retention Analysis'],
    link: 'https://www.tiktok.com/@purityy_ngugi/video/7534015337319222534',
    category: 'Short-Form',
  },
  {
    id: 4,
    title: 'Generative AI B-Roll Showcase',
    description:
      'Seamlessly blended AI-generated visuals using Higgsfield and Kling AI into real footage. Solo-produced broadcast-quality content without a full studio team.',
    platform: 'tiktok',
    tools: ['CapCut', 'Higgsfield', 'Kling AI'],
    link: 'https://www.tiktok.com/@purityy_ngugi/video/7518514279813844229',
    category: 'AI Content',
  },
  {
    id: 8,
    title: 'Viral Content Strategy Edit',
    description:
      'Hook-led short-form content built for maximum watch-time. Pacing, sound design and visual rhythm all dialled to platform-specific retention patterns.',
    platform: 'tiktok',
    tools: ['CapCut', 'Hook Engineering'],
    link: 'https://www.tiktok.com/@purityy_ngugi/video/7451720149851278598',
    category: 'Short-Form',
  },
  {
    id: 5,
    title: 'Brand Identity Campaign Reel',
    description:
      'Polished brand campaign translating business goals into a cohesive visual story. Defined KPIs for engagement, reach and saves hit within the first week of launch.',
    platform: 'instagram',
    tools: ['DaVinci Resolve', 'Canva Pro', 'Midjourney'],
    link: 'https://www.instagram.com/purityy_ngugi/reel/DTf_2eJDCpv/',
    category: 'Brand Content',
  },
  {
    id: 6,
    title: 'Product Launch Viral Reel',
    description:
      'Fast-cut product reveal engineered for maximum saves and shares. Every edit decision informed by watch-time data — pacing, music hits and colour all dialled to retention.',
    platform: 'instagram',
    tools: ['CapCut', 'Midjourney', 'Canva Pro'],
    link: 'https://www.instagram.com/purityy_ngugi/reel/DRh3_xLjGUw/',
    category: 'Short-Form',
  },
  {
    id: 9,
    title: 'Creative Storytelling Reel',
    description:
      'Narrative-driven reel blending original footage with generative visuals. Colour graded for a cinematic, high-contrast finish with strong visual identity.',
    platform: 'instagram',
    tools: ['DaVinci Resolve', 'Higgsfield', 'Canva Pro'],
    link: 'https://www.instagram.com/purityy_ngugi/reel/DN6WP7OgDnw/',
    category: 'Storytelling',
  },
]

const platformConfig = {
  youtube: {
    label: 'YouTube',
    gradientFrom: 'rgba(220,38,38,0.15)',
    gradientTo: 'rgba(127,0,0,0.05)',
    badge: 'bg-red-950/60 text-red-400 border-red-900/40',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-red-500/60">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    playIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-red-500/50">
        <path d="M8 5v14l11-7z" />
      </svg>
    ),
  },
  tiktok: {
    label: 'TikTok',
    gradientFrom: 'rgba(105,201,208,0.12)',
    gradientTo: 'rgba(0,0,0,0.1)',
    badge: 'bg-cyan-950/60 text-cyan-400 border-cyan-900/40',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-cyan-500/50">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l-.04-8.75a8.18 8.18 0 0 0 4.78 1.52V4.62a4.85 4.85 0 0 1-1-.07z" />
      </svg>
    ),
    playIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-cyan-500/40">
        <path d="M8 5v14l11-7z" />
      </svg>
    ),
  },
  instagram: {
    label: 'Instagram',
    gradientFrom: 'rgba(225,48,108,0.12)',
    gradientTo: 'rgba(131,58,180,0.08)',
    badge: 'bg-pink-950/60 text-pink-400 border-pink-900/40',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-pink-500/50">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
    playIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-pink-500/40">
        <path d="M8 5v14l11-7z" />
      </svg>
    ),
  },
}

function extractYouTubeId(url: string): string | null {
  const match = url.match(/[?&]v=([^&#]+)/)
  return match ? match[1] : null
}

function getInstagramEmbedUrl(url: string): string | null {
  const reel = url.match(/\/reel\/([^/?#]+)/)
  if (reel) return `https://www.instagram.com/reel/${reel[1]}/embed/`
  const post = url.match(/\/p\/([^/?#]+)/)
  if (post) return `https://www.instagram.com/p/${post[1]}/embed/`
  return null
}

function getTikTokEmbedUrl(url: string): string | null {
  const match = url.match(/\/video\/(\d+)/)
  return match ? `https://www.tiktok.com/embed/v2/${match[1]}` : null
}

type Tab = 'all' | Platform

const tabs: { id: Tab; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'youtube', label: 'YouTube' },
  { id: 'tiktok', label: 'TikTok' },
  { id: 'instagram', label: 'Instagram' },
]

const ITEMS_PER_PAGE = 3

export default function Work() {
  const [active, setActive] = useState<Tab>('all')
  const [currentPage, setCurrentPage] = useState(1)

  const filtered = active === 'all' ? projects : projects.filter((p) => p.platform === active)
  const totalPages = active === 'all' ? Math.ceil(filtered.length / ITEMS_PER_PAGE) : 1
  const displayed = active === 'all'
    ? filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
    : filtered

  function switchTab(tab: Tab) {
    setActive(tab)
    setCurrentPage(1)
  }

  return (
    <section id="work" className="py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs text-[#c9a53d] tracking-widest uppercase mb-3">Selected Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0ece4]">Featured Projects</h2>
        </div>

        {/* Platform tabs */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => switchTab(t.id)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                active === t.id
                  ? 'bg-[#c9a53d] text-[#070707] font-semibold'
                  : 'border border-[#1a1a1a] text-[#6b6b6b] hover:border-[#c9a53d]/30 hover:text-[#f0ece4]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Projects list */}
        <div className="flex flex-col gap-6">
          {displayed.map((project) => {
            const config = platformConfig[project.platform]
            const isYouTube = project.platform === 'youtube'
            const youtubeId = isYouTube ? extractYouTubeId(project.link) : null
            const instagramEmbed = project.platform === 'instagram' ? getInstagramEmbedUrl(project.link) : null
            const tiktokEmbed = project.platform === 'tiktok' ? getTikTokEmbedUrl(project.link) : null
            const hasEmbed = !!(youtubeId || instagramEmbed || tiktokEmbed)

            const videoEmbed = youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full border-0"
              />
            ) : instagramEmbed ? (
              <iframe
                src={instagramEmbed}
                title={project.title}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                scrolling="no"
                className="absolute inset-0 w-full h-full border-0"
              />
            ) : tiktokEmbed ? (
              <iframe
                src={tiktokEmbed}
                title={project.title}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                scrolling="no"
                className="absolute inset-0  h-full border-0"
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${config.gradientFrom}, ${config.gradientTo})` }}
              >
                <div className="flex flex-col items-center gap-3 opacity-50">
                  {config.icon}
                  {config.playIcon}
                </div>
              </div>
            )

            return (
              <article
                key={project.id}
                className={`flex flex-col md:flex-row rounded-2xl border border-[#1a1a1a] bg-[#0e0e0e] overflow-hidden card-hover ${
                  !isYouTube ? 'md:h-[520px]' : ''
                }`}
              >
                {/* Video side */}
                {isYouTube ? (
                  <div className="relative shrink-0 overflow-hidden bg-black aspect-video md:w-[58%]">
                    {videoEmbed}
                  </div>
                ) : (
                  // Portrait: 58% wide container, video contained at 9:16 and centred
                  <div
                    className="relative shrink-0 overflow-hidden flex items-center justify-center aspect-[9/16] md:w-[58%] md:aspect-auto md:self-stretch"
                    style={{ background: `linear-gradient(135deg, ${config.gradientFrom}, ${config.gradientTo})` }}
                  >
                    <div className="relative h-full aspect-[9/16] overflow-hidden">
                      {instagramEmbed ? (
                        <iframe
                          src={instagramEmbed}
                          title={project.title}
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          allowFullScreen
                          scrolling="no"
                          className="absolute inset-0 w-full h-full border-0"
                        />
                      ) : tiktokEmbed ? (
                        <iframe
                          src={tiktokEmbed}
                          title={project.title}
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          allowFullScreen
                          scrolling="no"
                          className="absolute inset-0 w-full h-full border-0"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-50">
                          {config.icon}
                          {config.playIcon}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Info side */}
                <div className="flex-1 flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-xs px-2.5 py-0.5 rounded-full border ${config.badge}`}>
                        {config.label}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full border border-[#1a1a1a] text-[#6b6b6b]">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#f0ece4] mb-3 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#6b6b6b] leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool) => (
                        <span key={tool} className="text-xs px-2 py-0.5 rounded bg-[#1a1a1a] text-[#a0998e]">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm text-[#c9a53d] hover:text-[#e8c45e] transition-colors"
                  >
                    {hasEmbed ? `Continue on ${config.label}` : `View on ${config.label}`}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        {/* Pagination — only on "All Work" tab */}
        {active === 'all' && totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-full border border-[#1a1a1a] text-sm text-[#6b6b6b] hover:border-[#c9a53d]/30 hover:text-[#f0ece4] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              ← Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-full text-sm transition-all ${
                  currentPage === page
                    ? 'bg-[#c9a53d] text-[#070707] font-semibold'
                    : 'border border-[#1a1a1a] text-[#6b6b6b] hover:border-[#c9a53d]/30 hover:text-[#f0ece4]'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-full border border-[#1a1a1a] text-sm text-[#6b6b6b] hover:border-[#c9a53d]/30 hover:text-[#f0ece4] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              Next →
            </button>
          </div>
        )}

        {/* Channel CTAs */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {(
            [
              { platform: 'YouTube', handle: '@purity_ngugi', href: 'https://youtube.com/@purity_ngugi', color: '#FF0000' },
              { platform: 'TikTok', handle: '@purityy_ngugi', href: 'https://www.tiktok.com/@purityy_ngugi', color: '#69C9D0' },
              { platform: 'Instagram', handle: '@purityy_ngugi', href: 'https://www.instagram.com/purityy_ngugi', color: '#E1306C' },
            ] as const
          ).map((ch) => (
            <a
              key={ch.platform}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-5 py-4 rounded-xl border border-[#1a1a1a] bg-[#0e0e0e] hover:border-[#c9a53d]/20 transition-all group"
            >
              <div>
                <p className="text-xs text-[#6b6b6b] tracking-wide mb-0.5">{ch.platform}</p>
                <p className="text-sm font-medium text-[#f0ece4]">{ch.handle}</p>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-[#3a3a3a] group-hover:text-[#c9a53d] transition-colors"
              >
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
