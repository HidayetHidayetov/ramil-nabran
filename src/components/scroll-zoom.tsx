"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hero fonu: Ramilin real fotosu — həm yavaş kenburns zoom,
 * həm də scroll etdikcə əlavə böyümə.
 */
export function HeroBg() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.parentElement?.getBoundingClientRect();
      if (!r) return;
      const p = Math.min(1, Math.max(0, -r.top / Math.max(r.height, 1)));
      el.style.transform = `scale(${1 + p * 0.3})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="absolute inset-0">
      <div ref={ref} className="h-full w-full will-change-transform">
        <img
          src="/images/hero.jpg"
          alt="Ramil Nabran — İsti Yay klipindən kadr"
          className="kenburns h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
    </div>
  );
}

/**
 * experiment: real səhnə fotosu + scroll-a bağlı səs.
 * - Girişdə "İsti Yay" astadan (0.12) çalmağa cəhd edir.
 * - Scroll-la səhnəyə yaxınlaşdıqca foto böyüyür + səs artır (0.85-ə qədər).
 * - Uzaqlaşanda səs yenə azalır.
 * QEYD: brauzer səsli autoplay-ı bloklayırsa "Səsi aç" düyməsi çıxır —
 * bir dəfə basandan sonra hər şey avtomatik işləyir.
 */
const LOW = 0.12;
const HIGH = 0.85;

export function ScrollZoom() {
  const section = useRef<HTMLElement>(null);
  const visual = useRef<HTMLDivElement>(null);
  const caption = useRef<HTMLDivElement>(null);
  const audio = useRef<HTMLAudioElement | null>(null);
  const [needTap, setNeedTap] = useState(false);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const a = new Audio("/audio/isti-yay.mp3");
    a.loop = true;
    a.volume = LOW;
    audio.current = a;
    let cancelled = false;

    a.play()
      .then(() => {
        if (!cancelled) {
          setOn(true);
          setNeedTap(false);
        }
      })
      .catch(() => {
        if (!cancelled) setNeedTap(true);
      });

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

      const scale = 1 + p * 0.55;
      const rotate = p * 6 - 3;
      vis.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
      if (cap) {
        const o = p > 0.55 ? Math.min(1, (p - 0.55) / 0.25) : 0;
        cap.style.opacity = String(o);
        cap.style.transform = `translateY(${(1 - Math.min(1, Math.max(0, (p - 0.55) / 0.45))) * 40}px)`;
      }
      // səs scroll-a bağlı: yaxınlaşdıqca artır, uzaqlaşdıqca azalır
      if (!a.paused) {
        const inView = r.top < window.innerHeight && r.bottom > 0;
        a.volume = inView ? LOW + p * (HIGH - LOW) : LOW;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelled = true;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      a.pause();
      audio.current = null;
    };
  }, []);

  const enable = async () => {
    const a = audio.current;
    if (!a) return;
    try {
      await a.play();
      setOn(true);
      setNeedTap(false);
    } catch {
      setNeedTap(true);
    }
  };

  return (
    <section ref={section} className="relative h-[260vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden bg-[#08080c]">
        <div className="hero-glow absolute inset-0" />
        <div className="absolute top-8 flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-[#ffb020]">
          {on && (
            <span className="eq"><span /><span /><span /><span /></span>
          )}
          İSTİ YAY • SCROLL ET
        </div>

        <div ref={visual} className="relative will-change-transform">
          <div className="overflow-hidden rounded-[2rem] border border-[#ff6a00]/40 shadow-[0_0_120px_rgba(255,77,0,0.45)]">
            <img
              src="/images/stage.jpg"
              alt="Ramil Nabran — səhnə"
              className="h-[52vh] w-[82vw] object-cover md:h-[62vh] md:w-auto md:aspect-square"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div ref={caption} className="absolute bottom-14 px-4 text-center opacity-0">
          <div className="text-3xl font-black md:text-5xl">
            Səs <span className="ember-text">yaxınlaşır.</span>
          </div>
          <p className="mx-auto mt-2 max-w-md text-sm text-neutral-400">
            Yaxınlaşdıqca musiqi güclənir — uzaqlaşanda yenə astalaşır.
          </p>
        </div>

        {needTap && (
          <button
            onClick={enable}
            className="ember-btn absolute bottom-24 rounded-full px-8 py-4 text-base"
          >
            ▶ Səsi aç — İsti Yay
          </button>
        )}
      </div>
    </section>
  );
}
