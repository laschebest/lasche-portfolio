"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { NowPlaying } from "@/lib/spotify";

type SpotifyNowPlayingProps = {
  initialTrack: NowPlaying;
};

function formatMs(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default function SpotifyNowPlaying({ initialTrack }: SpotifyNowPlayingProps) {
  const [track, setTrack] = useState<NowPlaying>(initialTrack);
  const [progressMs, setProgressMs] = useState(initialTrack?.progressMs ?? 0);

  useEffect(() => {
    setTrack(initialTrack);
    setProgressMs(initialTrack?.progressMs ?? 0);
  }, [initialTrack]);

  useEffect(() => {
    if (!track?.isPlaying) {
      return;
    }

    const timer = window.setInterval(() => {
      setProgressMs((current) => Math.min(current + 1000, track.durationMs));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [track]);

  useEffect(() => {
    const refresh = async () => {
      try {
        const response = await fetch("/api/spotify", { cache: "no-store" });

        if (!response.ok) {
          setTrack(null);
          setProgressMs(0);
          return;
        }

        const nextTrack = (await response.json()) as NowPlaying;
        setTrack(nextTrack);
        setProgressMs(nextTrack?.progressMs ?? 0);
      } catch {
        setTrack(null);
        setProgressMs(0);
      }
    };

    const interval = window.setInterval(refresh, 5000);
    return () => window.clearInterval(interval);
  }, []);

  const progressWidth = !track?.durationMs
    ? "0%"
    : `${Math.min((progressMs / track.durationMs) * 100, 100)}%`;

  if (!track) {
    return (
      <div className="w-full max-w-[22rem] rounded-[1.6rem] border border-white/8 bg-[#14110f]/72 px-4 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl">
        <span className="block font-mono text-[0.52rem] uppercase tracking-[0.3em] text-[#d8b38a]/60">
          Spotify
        </span>
        <span className="mt-2 block font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[#f0ede6]/72">
          Offline
        </span>
      </div>
    );
  }

  return (
    <a
      href={track.url}
      target="_blank"
      rel="noreferrer"
      className="block w-full max-w-[22rem] rounded-[1.6rem] border border-[#d8b38a]/10 bg-[linear-gradient(180deg,rgba(24,20,18,0.94),rgba(14,12,11,0.78))] p-3 shadow-[0_18px_55px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-0.5"
    >
      <div className="flex items-center gap-3">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[1rem] border border-white/8 bg-[#1d1917]">
          {track.albumImageUrl ? (
            <Image
              src={track.albumImageUrl}
              alt={track.title}
              fill
              sizes="56px"
              className="object-cover"
            />
          ) : null}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[0.5rem] uppercase tracking-[0.28em] text-[#d8b38a]/68">
              Now Playing
            </span>
            <span className="font-mono text-[0.54rem] uppercase tracking-[0.18em] text-[#f0ede6]/42">
              {track.isPlaying ? "Live" : "Paused"}
            </span>
          </div>

          <span className="mt-1 block truncate font-mono text-[0.72rem] uppercase tracking-[0.08em] text-[#f0ede6]">
            {track.title}
          </span>
          <span className="mt-1 block truncate font-mono text-[0.62rem] uppercase tracking-[0.08em] text-[#f0ede6]/54">
            {track.artist}
          </span>
        </div>
      </div>

      <div className="mt-3 h-[2px] w-full overflow-hidden rounded-full bg-white/8">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,#d8b38a,#f0ede6)] transition-[width] duration-700"
          style={{ width: progressWidth }}
        />
      </div>

      <div className="mt-2 flex items-center justify-between font-mono text-[0.56rem] uppercase tracking-[0.12em] text-[#f0ede6]/42">
        <span>{formatMs(progressMs)}</span>
        <span>{formatMs(track.durationMs)}</span>
      </div>
    </a>
  );
}
