import type { Metadata } from "next";
import "./globals.css";
import { MobileNav } from "./mobile-nav";

export const metadata: Metadata = {
  title: "Ramil Nabran — Azərbaycan Repinin Yay Səsi",
  description:
    "Ramil Nabran: 1993-dən Azərbaycan repi, Nabran hiti, İsti Yay, Gecələrim, Baş Üstə. Bioqrafiya, mahnılar, kliplər.",
};

const IG = "https://www.instagram.com/ramilnabran";
const YT = "https://www.youtube.com/@RamilNabran";
const TT = "https://www.tiktok.com/@ramilnabran";
const FB = "https://www.facebook.com/ramilnabranmusic";
const SPOTIFY = "https://open.spotify.com/artist/18D9h0yt6D7BHAoyYYVCtp";
const APPLE = "https://music.apple.com/kz/artist/ramil-nabran/1329392738";

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ff6a00]/20 bg-black/85 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2 text-base font-black tracking-wide md:text-xl">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#ffc400] to-[#ff4d00] text-sm font-black text-black">
            R
          </span>
          <span className="ember-text">RAMIL NABRAN</span>
        </a>
        <nav className="hidden gap-5 text-sm text-neutral-300 md:flex">
          <a href="#bio" className="transition hover:text-[#ffc400]">Bioqrafiya</a>
          <a href="#musiqi" className="transition hover:text-[#ffc400]">Musiqi</a>
          <a href="#klip" className="transition hover:text-[#ffc400]">Kliplər</a>
          <a href="#qalereya" className="transition hover:text-[#ffc400]">Qalereya</a>
          <a href="#sosial" className="transition hover:text-[#ffc400]">Sosial</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#musiqi" className="ember-btn rounded-full px-4 py-2 text-xs md:px-5 md:text-sm">
            Dinlə
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const socials: [string, string][] = [
    ["Instagram", IG],
    ["YouTube", YT],
    ["TikTok", TT],
    ["Facebook", FB],
    ["Spotify", SPOTIFY],
    ["Apple Music", APPLE],
  ];
  return (
    <footer className="border-t border-[#ff6a00]/20 bg-[#08080c]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.3fr_1fr_1.3fr]">
        <div>
          <div className="text-2xl font-black tracking-wide ember-text">RAMIL NABRAN</div>
          <p className="mt-1 text-xs tracking-widest text-neutral-500">REP • AZƏRBAYCAN • 1993-DƏN</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
            Özü ilə yay gətirən insan. Küçə repindən toy səhnəsinə qədər — enerji eyni qalır.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {socials.map(([t, h]) => (
              <a
                key={t}
                href={h}
                target="_blank"
                rel="noreferrer"
                className="rounded-full ember-border px-4 py-1.5 text-xs font-bold text-[#ffd98a] transition hover:bg-[#ff4d00] hover:text-black"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-black tracking-widest text-[#ffb020]">SAYT</div>
          <ul className="mt-4 space-y-2.5 text-sm text-neutral-400">
            {[
              ["Bioqrafiya", "#bio"],
              ["Musiqi", "#musiqi"],
              ["Kliplər", "#klip"],
              ["Qalereya", "#qalereya"],
            ].map(([t, h]) => (
              <li key={t}>
                <a href={h} className="transition hover:text-[#ffc400]">{t}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-black tracking-widest text-[#ffb020]">DİNLƏ</div>
          <p className="mt-4 text-sm text-neutral-400">
            Yeni relizlər əvvəlcə YouTube və Spotify-da çıxır. Abunə ol, qaçırma.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={YT} target="_blank" rel="noreferrer" className="ember-btn rounded-full px-6 py-2.5 text-sm">
              YouTube
            </a>
            <a href={SPOTIFY} target="_blank" rel="noreferrer" className="rounded-full ember-border px-6 py-2.5 text-sm text-[#ffd98a]">
              Spotify
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-neutral-500 sm:flex-row">
          <span>© 2026 Ramil Nabran • Tanıtım saytı</span>
          <a href="https://hidayetov.com" className="transition hover:text-[#ffc400]">
            Created by <span className="font-bold text-[#ffc400]">hidayetov.com</span>
          </a>
          <span>Rap • Hip-hop • Dance</span>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az" suppressHydrationWarning>
      <body>
        <Nav />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
