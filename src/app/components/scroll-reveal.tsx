"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const motionGroups = [
  { selector: ".stars,.finalStars,.passportStamp,.photoLabel", distance: 52, rotation: 7 },
  { selector: ".stickerNote,.memeLine,.catBadge,.ritualNotice", distance: -38, rotation: -4 },
  { selector: ".portraitFrame,.aboutPortrait,.portraitTall", distance: 28, rotation: 1.8 },
  { selector: ".serviceCard:nth-child(odd),.noteOne,.postcard.pOne,.deckCard.dOne,.divineCardMoon", distance: 34, rotation: 3.5 },
  { selector: ".serviceCard:nth-child(even),.noteTwo,.postcard.pThree,.deckCard.dThree,.divineCardCat", distance: -34, rotation: -3.5 },
  { selector: ".clubTicket,.individualTicket,.monthCalendar,.clubTicketPage", distance: 42, rotation: 2.5 },
  { selector: ".sunDisc,.travelOrbit,.bigMoon,.portraitHalo", distance: -24, rotation: 8 },
  { selector: ".proofCat,.aboutCat,.innerCat,.photoCat,.outcomeCat,.clubForCat", distance: 58, rotation: 5 },
  { selector: ".flyingCard.cardA,.postcard.pTwo,.deckCard.dTwo,.divineCardRoad", distance: -48, rotation: -5 },
  { selector: ".flyingCard.cardB,.clubHeroCat,.deckCat", distance: 48, rotation: 5 },
] as const;

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lightweightMode = window.matchMedia("(max-width: 768px), (pointer: coarse)").matches;
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (reduceMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    revealElements.forEach((element) => observer.observe(element));

    const movingElements = lightweightMode
      ? []
      : motionGroups.flatMap(({ selector, distance, rotation }) =>
          Array.from(document.querySelectorAll<HTMLElement>(selector)).map((element) => ({ element, distance, rotation })),
        );

    if (!movingElements.length) {
      return () => observer.disconnect();
    }

    let frame = 0;
    let previousScroll = window.scrollY;
    const updateMotion = () => {
      const viewport = window.innerHeight || 1;
      const currentScroll = window.scrollY;
      document.body.dataset.scrollDirection = currentScroll >= previousScroll ? "down" : "up";
      previousScroll = currentScroll;
      const positions = movingElements.map(({ element, distance, rotation }) => {
        const rect = element.getBoundingClientRect();
        if (rect.bottom < -viewport || rect.top > viewport * 2) return null;
        const progress = Math.max(-1.35, Math.min(1.35, (rect.top + rect.height / 2 - viewport / 2) / viewport));
        return { element, distance, rotation, progress };
      });
      positions.forEach((position) => {
        if (!position) return;
        const { element, distance, rotation, progress } = position;
        element.style.translate = `0 ${(-progress * distance).toFixed(2)}px`;
        element.style.rotate = `${(-progress * rotation).toFixed(2)}deg`;
      });
      frame = 0;
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateMotion);
    };

    updateMotion();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      movingElements.forEach(({ element }) => {
        element.style.removeProperty("translate");
        element.style.removeProperty("rotate");
      });
    };
  }, [pathname]);

  return null;
}
