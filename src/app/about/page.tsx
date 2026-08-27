import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { MobileCta } from "../components/mobile-cta";
import { channel, telegram } from "../content";

export const metadata: Metadata = {
  title: "Об Авроре",
  description: "Аврора — таролог с пятилетней практикой, автор aurora’s room и проводник к более ясной жизни.",
};

const principles = [
  ["Честно", "Без сладких обещаний и попыток сказать только то, что хочется услышать."],
  ["Понятно", "Без туманных формулировок: карты складываются в историю на человеческом языке."],
  ["По любви", "Бережно к тебе, твоей ситуации и свободе сделать собственный выбор."],
  ["С юмором", "Потому что даже духовному пути иногда очень нужен мемный котик."],
];

export default function AboutPage() {
  return (
    <main className="innerPage aboutPage">
      <section className="aboutPageHero">
        <SiteHeader />
        <div className="shell aboutPageHeroGrid">
          <div className="aboutPageTitle"><p className="eyebrow">nice to meet you</p><h1>Аврора.<br /><em>Человек между<br />небом и землёй.</em></h1><p>Таролог, путешественница, автор закрытого пространства и тот человек, которому можно принести свой самый запутанный вопрос.</p></div>
          <div className="aboutPagePortrait">
            <div className="portraitHalo" aria-hidden="true">✦</div>
            <div className="portraitTall" style={{ position: "relative" }}><Image src="/aurora.jpg" alt="Аврора" fill priority sizes="(max-width: 800px) 82vw, 470px" /></div>
            <span className="photoLabel">TAROT READER<br />WORLD EXPLORER<br />CAT PERSON</span>
            <span className="photoCat" aria-hidden="true">🐈‍⬛</span>
          </div>
        </div>
        <div className="aboutCloudRow" aria-hidden="true">☁　☁　☁　☁　☁　☁　☁</div>
      </section>

      <section className="storySection">
        <div className="shell storyGrid" data-reveal>
          <div><p className="eyebrow dark">моя история</p><h2>Не «дар свыше»,<br />а пять лет <em>практики</em></h2></div>
          <div className="storyCopy"><p className="bigParagraph">За красивыми картами — годы работы с реальными людьми, сложными чувствами и вопросами, на которые нельзя ответить одним значением из учебника.</p><p>Аврора работает с Таро как с языком: видит связки, контекст и человека за вопросом. Ритуальная практика добавляет ещё один слой — работу с намерением, временем и энергией.</p><p>В канале рядом живут расклады, божества разных традиций, лунные даты, обучение, спорт, путешествия, бытовые открытия и коты. Потому что духовность здесь не отменяет обычную живую жизнь.</p></div>
        </div>
      </section>

      <section className="numbersSection"><div className="shell numberGrid" data-reveal><article><b>5</b><span>лет практики</span></article><article><b>2000+</b><span>спасённых душ — как говорит сама Аврора</span></article><article><b>1:1</b><span>личный формат и внимание к каждой истории</span></article><article><b>∞</b><span>путей — твой выбираешь только ты</span></article></div></section>

      <section className="principlesSection">
        <div className="shell" data-reveal><p className="eyebrow dark">как я работаю</p><div className="sectionHeading"><h2>Магия без<br />театрального дыма</h2><span className="catBadge">кот проверил: всё честно 🐈</span></div><div className="principleGrid">{principles.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="travelSection">
        <div className="travelOrbit" aria-hidden="true" /><div className="shell travelGrid" data-reveal><div className="travelCopy"><p className="eyebrow">человек мира</p><h2>Путешествия<br />меняют <em>оптику</em></h2><p>Новые места напоминают: у одной истории всегда больше одного прочтения. Это ощущение Аврора переносит и в работу — не загоняет тебя в единственный сценарий, а помогает увидеть пространство выбора.</p><a className="textLink ink" href={channel} target="_blank" rel="noreferrer">смотреть жизнь в канале ↗</a></div><div className="travelPostcards"><div className="postcard pOne"><span>☁️</span><b>небо</b><small>всегда чуть больше наших страхов</small></div><div className="postcard pTwo"><span>✦</span><b>дорога</b><small>начинается с решения двигаться</small></div><div className="postcard pThree"><span>🐈‍⬛</span><b>знак</b><small>иногда буквально приходит сам</small></div></div></div>
      </section>

      <section className="aboutChoiceSection"><div className="shell aboutChoiceGrid" data-reveal><div><p className="eyebrow dark">куда дальше?</p><h2>Выбери свою<br /><em>следующую главу</em></h2></div><div><Link href="/services"><span>01</span><b>Нужен ответ</b><i>расклады и ритуалы →</i></Link><Link href="/training"><span>02</span><b>Хочу научиться</b><i>индивидуальное обучение →</i></Link><Link href="/club"><span>03</span><b>Хочу быть в кругу</b><i>закрытый клуб →</i></Link></div></div></section>

      <section className="compactCta"><div className="shell" data-reveal><p className="eyebrow">если откликается</p><h2>Давай знакомиться<br /><em>лично.</em></h2><a className="button buttonPrimary" href={telegram} target="_blank" rel="noreferrer">написать Авроре <span>→</span></a><div className="compactCat" aria-hidden="true">☁ 🐈‍⬛ ☁</div></div></section>
      <SiteFooter />
      <MobileCta />
    </main>
  );
}
