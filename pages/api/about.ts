import type {NextApiRequest, NextApiResponse} from 'next'
import {IAboutText} from "../../types/about.types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IAboutText>
) {
  res.status(200).json({
    eng: {
      title: "About Me",
      description: [
        "My name is Max. I live in Prague. For the last few years of my life, I have been actively interested in learning languages, and in 2019 I first got acquainted with a programming language. Because of the need to automate routine tasks at work, I learned Python a little. I liked the result so much that I delved deeper into the field of programming. This was the beginning of a new stage in my life.",
        "Today I work as an email developer at WPP. But despite this, in my spare time I still study React Native and enhancement my knowledge in native JS, React, NextJS and Typescript. I am always happy to learn new technologies and try to put them into practice in my pet projects.",
      ]
    },
    ukr: {
      title: "Про мене",
      description: [
        "Мене звати Макс. Я живу у Празі. Декілька останніх років я активно захоплююся вивченням різних мов, а у 2019 році я вперше познайомився з мовою програмування. У зв'язку з необхідністю автоматизувати буденні завдання на роботі я почав вивчати Python. Результат мене вразив настільки, що я вирішив зануритися у програмування ще більше. З цього моменту почався новий етап мого життя.",
        "Сьогодні я працюю імейл розробником в компанії WPP. Але, незважаючи на це, у свій вільний час я все одно займаюся вивченням React Native та поглиблюю свої знання нативного JS, React, NextJS та Typescript. Я завжди із задоволенням вивчаю нові технології та намагаюся застосовувати їх на практиці у своїх pet-проектах.",
      ]
    },
    rus: {
      title: "Обо мне",
      description: [
        "Меня зовут Макс. Я живу в Праге. Последние несколько лет своей жизни я активно увлекаюсь изучением языков, а в 2019 году я впервые познакомился с языком программирования. В связи с необходимостью автоматизировать рутинные задачи на работе я немного подучил Python. Результат мне настолько понравился, что я решил углубиться в сферу программирования. С этого начался новый этап моей жизни.",
        "На сегодняшний день я работаю имэйл разработчиком в компании WPP. Но, несмотря на это, в свободное время я всё равно занимаюсь изучением React Native и углублением знаний в сфере нативного JS, React, NextJS и Typescript. Я всегда с удовольствием берусь за изучение новых технологий и стараюсь применять их на практике в своих pet-проектах.",
      ]
    },
    cz: {
      title: "O mně",
      description: [
        "Jmenuji se Max. Bydlím v Praze. Posledních několik let svého života se aktivně zajímám o studium jazyků a v roce 2019 jsem se poprvé seznámil s programovacím jazykem. Potřeboval jsem v práci automatizovat rutinní úkoly a proto jsem se trochu naučil Python. Byl jsem z výsledků nadšený, takže jsem se rozhodl prohloubit znalosti Pythonu a studovat programování dál. A tak začala nová etapa mého života.",
        "Dnes pracuji jako email vývojář ve společnosti WPP. Ale přesto se ve volném čase stále zabývám studiem React Native a prohloubením znalostí v oblasti nativního JSu, Reactu, NextJSu a Typescriptu. Vždy se rád učím nové technologie a snažím se je používat ve svých osobních projektech.",
      ]
    },
    hr: {
      title: "O meni",
      description: [
        "Zovem se Max. Živim u Pragu. Tijekom posljednjih nekoliko godina svoga života sam se aktivno bavio učenjem jezika, a 2019. godine se prvi put upoznao sa programskim jezikom. Trebao sam automatizirati na poslu rutinske zadatke, tako da malo naučio Python. Bio sam tako oduševljen rezultatom da odlućio produbiti znanje Pythona i učiti programiranje dalje. Tako je počelo novo poglavlje u mom životu.",
        "Danas radim kao razvojni inženjer tvrtki WPP. No, unatoč tome, u slobodno vrijeme i dalje učim React Native i produbljujem znanja u oblastima JSa, Reacta, NextJSa i Typescripta. Uvijek se rado učim nove tehnologije i pokušavam ih primijeniti u praksi u svojim projektima.",
      ]
    }
  })
}
