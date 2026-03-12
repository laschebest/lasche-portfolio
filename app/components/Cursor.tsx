"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const syncEnabled = () => setEnabled(mediaQuery.matches);

    syncEnabled();
    mediaQuery.addEventListener("change", syncEnabled);

    return () => mediaQuery.removeEventListener("change", syncEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx.current}px`;
        ringRef.current.style.top = `${ry.current}px`;
      }
      requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (!cursorRef.current || !ringRef.current) return;
      cursorRef.current.style.width = "20px";
      cursorRef.current.style.height = "20px";
      ringRef.current.style.width = "56px";
      ringRef.current.style.height = "56px";
      ringRef.current.style.borderColor = "#6d28d9";
    };

    const onLeave = () => {
      if (!cursorRef.current || !ringRef.current) return;
      cursorRef.current.style.width = "12px";
      cursorRef.current.style.height = "12px";
      ringRef.current.style.width = "36px";
      ringRef.current.style.height = "36px";
      ringRef.current.style.borderColor = "#6d28d9";
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent mix-blend-difference transition-[width,height] duration-300 pointer-events-none"
      />
      <div
        ref={ringRef}
        className="fixed z-[9998] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40 transition-[width,height,border-color] duration-300 pointer-events-none"
      />
    </>
  );
}
