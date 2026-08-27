import Link from "next/link";
import { telegram } from "../content";

type SiteHeaderProps = { tone?: "light" | "dark" };

export function SiteHeader({ tone = "light" }: SiteHeaderProps) {
  return (
    <nav className={`nav shell siteNav ${tone === "dark" ? "navDark" : ""}`} aria-label="Основная навигация">
      <Link className="brand" href="/">aurora’s room <span>🏹</span></Link>
      <div className="navLinks">
        <Link href="/services">услуги</Link>
        <Link href="/about">обо мне</Link>
        <Link href="/training">обучение</Link>
        <Link href="/club">клуб</Link>
      </div>
      <a className="navCta" href={telegram} target="_blank" rel="noreferrer">написать ↗</a>
    </nav>
  );
}
