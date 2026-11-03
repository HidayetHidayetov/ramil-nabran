import { Counter, Faq, Reveal, SectionHead } from "@/components/ui";
import { ScrollZoom } from "@/components/scroll-zoom";
import { AudioTeaser } from "@/components/audio-teaser";

const YT = "https://www.youtube.com/@RamilNabran";
const SPOTIFY = "https://open.spotify.com/artist/18D9h0yt6D7BHAoyYYVCtp";
const APPLE = "https://music.apple.com/kz/artist/ramil-nabran/1329392738";
const IG = "https://www.instagram.com/ramilnabran";

const marquee = [
  "NABRAN",
  "İSTİ YAY",
  "GECƏLƏRİM",
  "BAŞ ÜSTƏ",
  "PULUMA MİNNƏT",
  "ABRACADABRA",
  "MAXIMUM",
  "OPPALARA",
];

const tracks = [
  { t: "İsti Yay", d: "Laguna Beach-də çəkilən yay himni. Ramilin vizit kartı.", yt: "RbSUz4zTqnE", tag: "YAY HİTİ" },
  { t: "Gecələrim", d: "Akshınmusic imzalı gecə enerjisi. 2025-in seviləni.", yt: "xJrT9CFsqt0", tag: "2025" },
  { t: "Baş Üstə", d: "Sözü də özünə məxsus olan küçə hörməti.", yt: "d6BN9HWtv_A", tag: "KLİP" },
  { t: "Puluma Minnət", d: "Sərt beat, düz söz — rep kökü.", yt: "HEL8SB0VJj8", tag: "REP" },
  { t: "Abracadabra", d: "Kamro ilə sehrli dance-rep qarışımı.", yt: "", tag: "DANCE" },
  { t: "Maximum", d: "Toy və məclislərin temp qaldıranı.", yt: "", tag: "MƏCLİS" },
];

const timeline: [string, string, string][] = [
  ["1993", "Başlanğıc", "Sovetskidən Əhmədliyə köçən uşaq repə vurulur. Küçə, dəftər, ilk qafiyələr."],
  ["2000", "İlk yazı", "İlk studiya səsyazması. MİR TV, Savaş studiyası illəri."],
  ["2005", "Nabran partlayışı", "“Nabran” repi hit olur, dostlar ona bu adı taxır. Klan A Plan-a qoşulur."],
  ["2012", "Solo", "Qrup yoldaşının itkisindən sonra tək yol. Öz səsi, öz üslubu."],
  ["2026", "Yay gətirən adam", "İsti Yay, Gecələrim, Baş Üstə — səhnə, toy, klip, streaming hamısı."],
];

const faqs: [string, string][] = [
  ["Ramil Nabran kimdir?", "Əsl adı Ramil Akif oğlu Şamillidir, 8 noyabr 1977 Bakıda doğulub. 1993-dən rep oxuyur, 2005-də “Nabran” hiti ilə tanınıb."],
  ["Niyə Nabran deyilir?", "Nabranda doğulmayıb — 2005-də Nabran mahnısı uğur gətirəndən sonra sənətçi dostları bu təxəllüsü verib."],
  ["Ən məşhur mahnıları hansılardır?", "Tempi Tut, Maximum, Oppalara, İsti Yay, Gecələrim, Baş Üstə, Puluma Minnət, Abracadabra."],
  ["Hansı janrda oxuyur?", "Hip-hop əsasında pop-rep və dance qarışımı — həm küçə repi, həm məclis enerjisi."],
  ["Harada dinləmək olar?", "YouTube, Spotify, Apple Music, TikTok və Instagram-da — aşağıdakı Sosial bölməsində hamısı var."],
];

export default function Home() {
  return (
    <div id="top">
      <AudioTeaser />
      {/* ============ HERO ============ */}
      <section className="grain relative flex min-h-[94vh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b00] via-[#0a0a0f] to-[#0a0a0f]" />
        <div className="hero-glow absolute inset-0" />
        <div className="pointer-events-none absolute -right-10 top-10 select-none text-[22vw] font-black leading-none outline-text opacity-40 md:text-[16vw]">
          RN
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-4 py-24 text-center md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full ember-border bg-black/60 px-4 py-1.5 text-xs tracking-widest text-[#ffd98a] backdrop-blur">
            <span className="eq"><span /><span /><span /><span /></span>
            AZƏRBAYCAN REPİ • 1993-DƏN SƏHNƏDƏ
          </div>
          <h1 className="mx-auto mt-5 max-w-4xl text-6xl font-black leading-[0.95] md:text-8xl">
            RAMIL
            <br />
            <span className="ember-text">NABRAN</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-300 md:text-lg">
            Özü ilə yay gətirən insan. Nabran-dan İsti Yay-a qədər — küçə repinin məclis enerjisi ilə birləşdiyi səs.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#musiqi" className="ember-btn rounded-full px-8 py-4 text-base">
              Musiqini dinlə
            </a>
            <a
              href="#klip"
              className="rounded-full ember-border bg-black/50 px-8 py-4 text-base text-[#ffd98a] backdrop-blur transition hover:bg-black/80"
            >
              Kliplərə bax
            </a>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { v: 30, s: "+ il", l: "Səhnə təcrübəsi" },
              { v: 103, s: "K+", l: "Instagram" },
              { v: 75, s: "K+", l: "YouTube" },
              { v: 50, s: "+", l: "Hit mahnı" },
            ].map((x) => (
              <div key={x.l} className="rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur">
                <div className="text-3xl font-black ember-text">
                  <Counter to={x.v} suffix={x.s} />
                </div>
                <div className="mt-1 text-xs text-neutral-400">{x.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="overflow-hidden border-y border-[#ff6a00]/25 bg-[#120801] py-3">
        <div className="marquee-track gap-0">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center">
              {marquee.map((m) => (
                <span key={`${k}-${m}`} className="flex items-center whitespace-nowrap px-6 text-sm font-black tracking-widest text-[#ffb020]">
                  {m} <span className="ml-12 text-[#ff4d00]/50">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ============ SCROLL ZOOM TEST ============ */}
      <ScrollZoom />

      {/* ============ BIO ============ */}
      <section id="bio" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 md:py-24">
        <SectionHead
          kicker="BİOQRAFİYA"
          title={<>Sovetskidən <span className="ember-text">bütün ölkəyə.</span></>}
          sub="Ramil Akif oğlu Şamilli — 8 noyabr 1977, Bakı. Atasını 1 yaşında itirib, şeir istedadı ondan qalıb. Repə 1993-də başlayıb."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-5">
          {timeline.map(([y, t, d], i) => (
            <Reveal key={y} delay={i === 1 ? "reveal-d1" : i === 2 ? "reveal-d2" : i >= 3 ? "reveal-d3" : ""} className="h-full">
              <div className="card h-full rounded-3xl p-6 ember-border">
                <div className="ember-text text-4xl font-black">{y}</div>
                <div className="mt-2 font-black">{t}</div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ MUSIC ============ */}
      <section id="musiqi" className="scroll-mt-24 border-y border-[#ff6a00]/20 bg-[#0e0a08]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <SectionHead
            kicker="MUSİQİ"
            title={<>Hitlər <span className="ember-text">danışır.</span></>}
            sub="YouTube-da klipə bax, Spotify və Apple Music-də dinlə. Siyahı təqdimat üçündür — tam kataloq streaming-dədir."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tracks.map((s, i) => (
              <Reveal key={s.t} delay={i % 3 === 1 ? "reveal-d1" : i % 3 === 2 ? "reveal-d2" : ""} className="h-full">
                <div className="zoom-img group flex h-full flex-col overflow-hidden rounded-3xl ember-border card">
                  <div className="relative h-44 shrink-0 overflow-hidden bg-gradient-to-br from-[#2a1200] via-[#140a05] to-black">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-black text-white/10">{s.t.slice(0, 2).toUpperCase()}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[11px] font-bold tracking-widest text-[#ffc400] backdrop-blur">
                      {s.tag}
                    </span>
                    <span className="eq absolute bottom-4 right-4"><span /><span /><span /><span /></span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="text-lg font-black">{s.t}</div>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">{s.d}</p>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
                      {s.yt ? (
                        <a href={`https://www.youtube.com/watch?v=${s.yt}`} target="_blank" rel="noreferrer" className="ember-btn rounded-full px-4 py-2">
                          YouTube ↗
                        </a>
                      ) : (
                        <a href={YT} target="_blank" rel="noreferrer" className="ember-btn rounded-full px-4 py-2">
                          YouTube ↗
                        </a>
                      )}
                      <a href={SPOTIFY} target="_blank" rel="noreferrer" className="rounded-full ember-border px-4 py-2 text-[#ffd98a]">
                        Spotify
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CLIPS ============ */}
      <section id="klip" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 md:py-24">
        <SectionHead
          kicker="KLİPLƏR"
          title={<>Səhnə <span className="ember-text">kadra sığmır.</span></>}
          sub="Son kliplər — YouTube-dan birbaşa. Laguna Beach-dən Bakı məclislərinə."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            ["RbSUz4zTqnE", "İsti Yay — Official Music Video"],
            ["xJrT9CFsqt0", "Gecələrim — Rəsmi Musiqi Videosu"],
          ].map(([id, t], i) => (
            <Reveal key={id} delay={i === 1 ? "reveal-d1" : ""}>
              <div className="overflow-hidden rounded-3xl ember-border bg-black">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={t}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 text-sm font-bold text-neutral-200">{t}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6 text-center">
          <a href={YT} target="_blank" rel="noreferrer" className="text-sm text-[#ffc400] underline-offset-4 hover:underline">
            Bütün kliplər — YouTube kanalı →
          </a>
        </Reveal>
      </section>

      {/* ============ DNA ============ */}
      <section className="border-y border-[#ff6a00]/20 bg-[#0e0a08]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <SectionHead
            kicker="STİL"
            title={<>Niyə <span className="ember-text">hamı qoşulur?</span></>}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["☀️", "Yay enerjisi", "Temp, coşğu, pozitivlik. Ramil çıxan kimi məclisin əhvalı qalxır — buna görə “özü ilə yay gətirən insan” deyirlər."],
              ["🐺", "Turan ruhu", "Salam Qarabağ kimi işlərdə vətən və soydaş sevgisi. Küçə repində milli qürur."],
              ["🎤", "Küçə + melodiya", "1993 rep məktəbi ilə toy səhnəsinin melodiyasını birləşdirən azsaylı ifaçılardan biri. Həm sərt, həm yadda qalan."],
            ].map(([e, t, d], i) => (
              <Reveal key={t} delay={i === 1 ? "reveal-d1" : i === 2 ? "reveal-d2" : ""} className="h-full">
                <div className="card h-full rounded-3xl p-7 ember-border">
                  <div className="text-4xl">{e}</div>
                  <div className="mt-3 text-lg font-black">{t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section id="qalereya" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead
            kicker="QALEREYA"
            title={<>Kadrajda <span className="ember-text">Ramil.</span></>}
            sub="Real fotolar public/images-ə əlavə olunacaq — hələlik stil placeholder-dir."
          />
          <a href={IG} target="_blank" rel="noreferrer" className="rounded-full ember-border px-6 py-3 text-sm text-[#ffd98a]">
            @ramilnabran — hamısı →
          </a>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Səhnə", "Canlı çıxış"],
            ["Klip", "İsti Yay"],
            ["Studiya", "Yazı prosesi"],
            ["Məclis", "Toy enerjisi"],
          ].map(([t, s], i) => (
            <Reveal key={t} delay={i === 1 ? "reveal-d1" : i === 2 ? "reveal-d2" : i === 3 ? "reveal-d3" : ""}>
              <div className="zoom-img group relative h-72 overflow-hidden rounded-3xl ember-border bg-gradient-to-br from-[#2a1200] via-[#140a05] to-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl font-black text-white/10">RN</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="font-black">{t}</div>
                  <div className="text-xs text-[#ffc400]">{s}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SOCIAL ============ */}
      <section id="sosial" className="scroll-mt-24 border-y border-[#ff6a00]/20 bg-[#0e0a08]">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center md:py-20">
          <Reveal>
            <div className="text-xs font-bold tracking-[0.3em] text-[#ffb020]">SOSİAL + STREAMİNG</div>
            <h2 className="mx-auto mt-2 text-3xl font-black md:text-4xl">
              Ramili <span className="ember-text">harada izləyirsən?</span>
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                ["Instagram — 103K", IG, "Foto + gündəlik"],
                ["YouTube — 75K", YT, "Kliplər"],
                ["TikTok", "https://www.tiktok.com/@ramilnabran", "Qısa videolar"],
                ["Facebook", "https://www.facebook.com/ramilnabranmusic", "Xəbərlər"],
                ["Spotify", SPOTIFY, "Dinlə"],
                ["Apple Music", APPLE, "Dinlə"],
              ].map(([t, h, d]) => (
                <a key={t} href={h} target="_blank" rel="noreferrer" className="card rounded-2xl p-5 text-left ember-border transition hover:border-[#ffc400]/60">
                  <div className="font-black">{t}</div>
                  <div className="text-xs text-neutral-400">{d}</div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <SectionHead kicker="SUALLAR" title={<>Bilmədiklərin <span className="ember-text">burada.</span></>} />
        <Reveal delay="reveal-d1" className="mt-8">
          <Faq items={faqs} />
        </Reveal>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="grain relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b00] via-black to-black" />
        <div className="hero-glow absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center md:py-28">
          <Reveal>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Yay havası
              <br />
              <span className="ember-text">heç bitməsin.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-300">
              Mahnıları dinlə, klipləri izlə, Instagram-da izlə — Ramil Nabran gündəmin içindədir.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={SPOTIFY} target="_blank" rel="noreferrer" className="ember-btn rounded-full px-9 py-4 text-base">
                Spotify-da dinlə
              </a>
              <a href={IG} target="_blank" rel="noreferrer" className="rounded-full ember-border bg-black/60 px-9 py-4 text-base text-[#ffd98a]">
                Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
