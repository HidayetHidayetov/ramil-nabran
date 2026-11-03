"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * TEST (experiment branch): girişdə 5-10 saniyəlik random musiqi tizeri.
 * DÜRÜST QEYD: Chrome/Safari səsli autoplay-ı bloklayır — ona görə
 * komponent əvvəlcə cəhd edir, bloklananda üzən "Səsi aç" düyməsi çıxır.
 * Real mahnılar gələndə public/audio/*.mp3 ilə əvəzlənəcək
 * (indiki teaser1/2 sadəcə ffmpeg test tonudur).
 */
const TRACKS = ["/audio/teaser1.mp3", "/audio/teaser2.mp3"];
const PLAY_SECONDS = 8;

export function AudioTeaser() {
  const audio = useRef<HTMLAudioElement | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [trackName, setTrackName] = useState("");

  const stop = useCallback(() => {
    const a = audio.current;
    if (!a) return;
    // fade-out
    const step = () => {
      if (a.volume > 0.05) {
        a.volume = Math.max(0, a.volume - 0.08);
        setTimeout(step, 80);
      } else {
        a.pause();
        setPlaying(false);
      }
    };
    step();
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const playRandom = useCallback(async () => {
    try {
      if (!audio.current) audio.current = new Audio();
      const a = audio.current;
      const track = TRACKS[Math.floor(Math.random() * TRACKS.length)];
      setTrackName(track.split("/").pop() ?? "");
      a.src = track;
      a.volume = 0.9;
      await a.play().catch(() => a.play());
      // random yerdən başla
      a.onloadedmetadata = () => {
        if (a.duration > PLAY_SECONDS + 2) {
          a.currentTime = Math.random() * (a.duration - PLAY_SECONDS - 1);
        }
      };
      setPlaying(true);
      setBlocked(false);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(stop, PLAY_SECONDS * 1000);
    } catch {
      setBlocked(true);
      setPlaying(false);
    }
  }, [stop]);

  useEffect(() => {
    // girişdə avtomatik cəhd (brauzer çox vaxt bloklayacaq)
    const t = setTimeout(() => {
      playRandom();
    }, 800);
    return () => {
      clearTimeout(t);
      if (timer.current) clearTimeout(timer.current);
      audio.current?.pause();
    };
  }, [playRandom]);

  if (!playing && !blocked) return null;

  return (
    <button
      onClick={() => (playing ? stop() : playRandom())}
      aria-label="Musiqi tizeri"
      className="fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full ember-border bg-black/85 py-2 pl-3 pr-4 text-xs font-bold text-[#ffd98a] backdrop-blur transition hover:bg-black"
    >
      {playing ? (
        <>
          <span className="eq"><span /><span /><span /><span /></span>
          {trackName} • {PLAY_SECONDS}s
        </>
      ) : (
        <>▶ Səsi aç — tizer</>
      )}
    </button>
  );
}
