import Link from "next/link";
import { channel, telegram } from "../content";

export function SiteFooter() {
  return (
    <footer>
      <div className="shell footerTop">
        <Link className="brand" href="/">aurora’s room 🏹</Link>
        <div>
          <Link href="/services">услуги</Link><Link href="/about">об Авроре</Link><Link href="/training">обучение</Link><Link href="/club">закрытый клуб</Link>
        </div>
        <div>
          <a href={channel} target="_blank" rel="noreferrer">telegram-канал ↗</a><a href={telegram} target="_blank" rel="noreferrer">личные сообщения ↗</a>
        </div>
      </div>
      <div className="shell footerBottom"><p>© 2026 Aurora’s room</p><p>Таро и духовные практики не заменяют медицинскую, юридическую, финансовую или психологическую помощь. Решения всегда остаются за вами.</p></div>
    </footer>
  );
}
