"use client";

import { useEffect, useRef } from "react";

/**
 * TEST (experiment branch): scroll-driven zoom.
 * Effektin adı: scroll-linked / scroll-driven animation —
 * piano saytındakı kimi sticky + scale on scroll (dolly-zoom hissi).
 * Scroll etdikcə mikrofon böyüyür + bir az fırlanır, mətn açılır.
 */
export function ScrollZoom() {
  const section = useRef<HTMLElement>(null);
  const visual = useRef<HTMLDivElement>(null);
  const caption = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const sec = section.current;
      const vis = visual.current;
      const cap = caption.current;
      if (!sec || !vis) return;
      const r = sec.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / Math.max(total, 1)));
      const scale = 1 + p * 1.1;
      const rotate = p * 10 - 5;
      vis.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
      if (cap) {
        cap.style.opacity = String(p > 0.55 ? Math.min(1, (p - 0.55) / 0.25) : 0);
        cap.style.transform = `translateY(${(1 - Math.min(1, Math.max(0, (p - 0.55) / 0.45))) * 40}px)`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={section} className="relative h-[260vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden bg-[#08080c]">
        <div className="hero-glow absolute inset-0" />
        <div className="absolute top-8 text-xs font-bold tracking-[0.3em] text-[#ffb020]">
          SCROLL ET — TEST EFFEKTİ
        </div>
        <div ref={visual} className="relative will-change-transform">
          {/* mikrofon — real foto gələndə <img> ilə əvəzlənəcək */}
          <div className="flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-[#ffc400] via-[#ff6a00] to-[#7a1e00] shadow-[0_0_120px_rgba(255,77,0,0.5)] md:h-80 md:w-80">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#0a0a0f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="2" width="6" height="12" rx="3" fill="#0a0a0f" stroke="none" />
              <path d="M5 10a7 7 0 0 0 14 0" />
              <line x1="12" y1="17" x2="12" y2="22" />
              <line x1="8" y1="22" x2="16" y2="22" />
            </svg>
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="text-[26vw] font-black leading-none text-black/10 md:text-[18vw]">RN</span>
          </div>
        </div>
        <div ref={caption} className="absolute bottom-16 px-4 text-center opacity-0">
          <div className="text-3xl font-black md:text-5xl">
            Səs <span className="ember-text">yaxınlaşır.</span>
          </div>
          <p className="mx-auto mt-2 max-w-md text-sm text-neutral-400">
            Scroll bitəndə effekt tamamlanır — bəyənsən real mikrofon/səhnə fotosu ilə əvəzləyəcəyik.
          </p>
        </div>
      </div>
    </section>
  );
}
