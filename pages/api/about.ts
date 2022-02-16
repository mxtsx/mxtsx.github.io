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
        "Today I am studying React Native and enhancement my knowledge in native JS, React, and Typescript. Although I have experience with the backend and databases, my heart belongs only to the frontend.",
        "Unfortunately, I have spent most of my time studying the theoretical part, so up to now, my portfolio is empty. Of course, I did practical assignments in various courses, but I don't see the point in including them. What is the point in presenting to the employer what he has already seen in other people's portfolios? Anyway, I promise to fill in the existing gaps in the portfolio soon! I am already working on this so hard."
      ]
    },
    ukr: {
      title: "Про мене",
      description: [
        "Мене звати Макс. Я живу у Празі. Декілька останніх років я активно захоплююся вивченням різних мов, а у 2019 році я вперше познайомився з мовою програмування. У зв'язку з необхідністю автоматизувати буденні завдання на роботі я почав вивчати Python. Результат мене вразив настільки, що я вирішив зануритися у програмування ще більше. З цього моменту почався новий етап мого життя.",
        "Станом на сьогодні я займаюся вивченням React Native та поглиблюю свої знання нативного JS, React і Typescript. Хоч я й маю досвід роботи з бекендом та базами даних, але моє серце належить лише фронтенду.",
        "На жаль, впродовж того часу, коли я вивчав програмування, більшу його частину я витратив на закріплення саме теоретичних знань, тому моє портфоліо поки що порожнє. Звичайно, я виконував практичні завдання під час проходження різноманітних курсів, але додавати їх до свого портфоліо я не бачу сенсу. Навіщо показувати роботодавцю те, що він вже бачив десятки разів раніше в інших людей? У будь-якому разі, наявні пробіли у портфоліо я обіцяю щонайшвидше заповнити! Вже зараз я активно над цим працюю."
      ]
    },
    rus: {
      title: "Обо мне",
      description: [
        "Меня зовут Макс. Я живу в Праге. Последние несколько лет своей жизни я активно увлекаюсь изучением языков, а в 2019 году я впервые познакомился с языком программирования. В связи с необходимостью автоматизировать рутинные задачи на работе я немного подучил Python. Результат мне настолько понравился, что я решил углубиться в сферу программирования. С этого начался новый этап моей жизни.",
        "На сегодняшний день я занимаюсь изучением React Native и углублением знаний в сфере нативного JS, React и Typescript. Хоть я и имею опыт работы с бэкендом и базами данных, но моё сердце пренадлежит лишь фронтенду.",
        "К сожалению, большую часть времени я потратил на изучение теоретических вопросов, так что пока что моё портфолио пустует. Разумеется, я выполнял практические задания на различных курсах, но вставлять их в своё портфолио я не вижу смысла. Зачем показывать работодателю то, что он видел уже десятки раз у других людей? В любом случае, существующие пробелы в портфолио я обещаю скоро заполнить! Уже сейчас я активно над этим работаю."
      ]
    },
    cz: {
      title: "O mně",
      description: [
        "Jmenuji se Max. Bydlím v Praze. Posledních několik let svého života se aktivně zajímám o studium jazyků a v roce 2019 jsem se poprvé seznámil s programovacím jazykem. Potřeboval jsem v práci automatizovat rutinní úkoly a proto jsem se trochu naučil Python. Byl jsem z výsledků nadšený, takže jsem se rozhodl prohloubit znalosti Pythonu a studovat programování dál. A tak začala nová etapa mého života.",
        "Dnes se zabývám studiem React Native a prohloubením znalostí v oblasti nativního JSu, Reactu a Typescriptu. I když mám zkušenosti s backendem a databázemi, mé srdce patří pouze frontendu.",
        "Bohužel, většinu času jsem strávil studiem teorie, takže zatím je mé portfolio prázdné. Samozřejmě jsem vykonával úkoly během různých kurzů, ale dávat je do portfolia nevidím smysl. Aby se zaměstnavatel díval na to, co už viděl mnohokrát u jiných lidí? Ale ne. Každopádně slibuji, že brzy své portfolio doplním! Už teď na tom aktivně pracuji."
      ]
    },
    hr: {
      title: "O meni",
      description: [
        "Zovem se Max. Živim u Pragu. Tijekom posljednjih nekoliko godina svoga života sam se aktivno bavio učenjem jezika, a 2019. godine se prvi put upoznao sa programskim jezikom. Trebao sam automatizirati na poslu rutinske zadatke, tako da malo naučio Python. Bio sam tako oduševljen rezultatom da odlućio produbiti znanje Pythona i učiti programiranje dalje. Tako je počelo novo poglavlje u mom životu.",
        "Danas učim React Native i produbljujem znanja u oblastima JSa, Reacta i Typescripta. Iako imam iskustva u backendu i bazama podataka, moje srce pripada samo frontendu.",
        "Nažalost, većinu vremena sam proveo proučavajući teoriju, tako da je za danas moj portfolio prazan. Premda da sam radio zadatke na različitim tečajevima, imati ih u portofoliju ne vidim smisao. Zašto? Da bi poslodavac gledao na ono što je već mnogo puta vidio u portfolijima drugih ljudi? U svakom slučaju, obećavam da ću uskoro nešto u portfolio dodavati! Već sada aktivno radim na tome."
      ]
    }
  })
}
