import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { MobileCta } from "../components/mobile-cta";
import { services, telegram } from "../content";

export const metadata: Metadata = {
  title: "Расклады и ритуалы",
  description: "Расклады Таро, ритуальные и энергетические работы Авроры: форматы, темы запросов и порядок записи.",
};

const tarotFormats = [
  ["Он, она и всё сложно", "чувства, намерения, динамика отношений и то, что осталось между строк"],
  ["Деньги и реализация", "точки роста, внутренние стопы, перспективы работы или нового проекта"],
  ["Перекрёсток", "когда вариантов несколько и хочется увидеть цену каждого решения"],
  ["Большая картина", "глубокий разбор ситуации, связей между событиями и ближайших сценариев"],
];

const ritualDirections = ["изобилие и денежный поток", "успех и новые возможности", "отношения и притяжение", "очищение и снятие негатива", "защита и восстановление", "работа с чакрами и энергией"];

export default function ServicesPage() {
  return (
    <main className="innerPage servicesPage">
      <section className="innerHero innerHeroBlue">
        <SiteHeader />
        <div className="shell innerHeroGrid">
          <div className="innerHeroCopy">
            <p className="eyebrow">услуги • aurora’s room</p>
            <h1>Не просто узнать<br /><em>будущее.</em><br />Понять настоящее.</h1>
            <p>Расклад — это карта местности. Ритуал — работа с направлением движения. Но рулить своей жизнью всё равно будешь ты.</p>
            <a className="button buttonPrimary" href={telegram} target="_blank" rel="noreferrer">подобрать работу <span>→</span></a>
          </div>
          <div className="innerHeroSymbol" aria-hidden="true"><div className="bigMoon">☾</div><span className="flyingCard cardA">THE STAR<br /><b>XVII</b></span><span className="flyingCard cardB">THE WORLD<br /><b>XXI</b></span><span className="innerCat">☁️ 🐈‍⬛</span></div>
        </div>
        <div className="marquee"><div>ТАРО ✦ РИТУАЛЫ ✦ ЯСНОСТЬ ✦ ПО ЛЮБВИ ✦ ТАРО ✦ РИТУАЛЫ ✦ ЯСНОСТЬ ✦ ПО ЛЮБВИ ✦</div></div>
      </section>

      <section className="detailSection" id="tarot">
        <div className="shell detailGrid" data-reveal>
          <div className="detailTitle"><p className="eyebrow dark">01 / расклады таро</p><h2>Когда ответ<br />уже внутри,<br /><em>но его не слышно</em></h2><p>Аврора собирает карты в цельную историю и объясняет её без заученных фраз, запугивания и лишнего тумана.</p></div>
          <div className="formatList">
            {tarotFormats.map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="ritualSection" id="rituals">
        <div className="shell" data-reveal>
          <div className="sectionHeading light"><div><p className="eyebrow">02 / ритуалы и энергетические работы</p><h2>Работа, которой<br />нужны <em>время и дата</em></h2></div><p className="sectionSidecopy">Для каждого запроса Аврора подбирает формат, день и способ работы. Часть ритуалов проводится только в определённые лунные даты.</p></div>
          <div className="ritualGrid">{ritualDirections.map((item, i) => <div key={item}><span>0{i + 1}</span><b>{item}</b><i>✦</i></div>)}</div>
          <div className="ritualNotice"><b>важно</b><p>Перед ритуальной работой нужна консультация. Если формат не подходит запросу, Аврора скажет об этом прямо и предложит другой путь.</p><span aria-hidden="true">🐈‍⬛</span></div>
        </div>
      </section>

      <section className="chooseSection">
        <div className="shell" data-reveal>
          <p className="eyebrow dark">быстрый навигатор</p><h2>Что выбрать?</h2>
          <div className="chooseGrid">
            <article><small>ТАРО</small><h3>«Хочу понять»</h3><p>Ситуацию, чувства, причины, перспективы и доступные сценарии.</p><a href={telegram} target="_blank" rel="noreferrer">на расклад ↗</a></article>
            <article><small>РИТУАЛ</small><h3>«Хочу изменить»</h3><p>Направить энергию в выбранную сферу после консультации и диагностики.</p><a href={telegram} target="_blank" rel="noreferrer">на консультацию ↗</a></article>
            <article><small>НЕ ЗНАЮ</small><h3>«Просто помоги»</h3><p>Опиши ситуацию своими словами. Подходящий формат не нужно выбирать заранее.</p><a href={telegram} target="_blank" rel="noreferrer">рассказать ↗</a></article>
          </div>
        </div>
      </section>

      <section className="serviceLinksSection">
        <div className="shell" data-reveal><p className="eyebrow dark">ещё два направления</p><div className="servicePageLinks"><Link href="/club"><span>03</span><h3>{services[2].title}</h3><p>{services[2].text}</p><b>888 ₽ / месяц →</b></Link><Link href="/training"><span>04</span><h3>{services[3].title}</h3><p>{services[3].text}</p><b>смотреть программу →</b></Link></div></div>
      </section>

      <section className="compactCta"><div className="shell" data-reveal><p className="eyebrow">один вопрос — уже начало</p><h2>Напиши, что происходит.<br /><em>Разберёмся вместе.</em></h2><a className="button buttonPrimary" href={telegram} target="_blank" rel="noreferrer">написать Авроре <span>→</span></a><div className="compactCat" aria-hidden="true">☁ 🐈‍⬛ ☁</div></div></section>
      <SiteFooter />
      <MobileCta />
    </main>
  );
}
