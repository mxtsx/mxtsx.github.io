import type { NextApiRequest, NextApiResponse } from 'next'
import {IAboutText} from "../../types/about.types";
import {IPortfolio} from "../../types/portfolio.types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPortfolio>
) {
  res.status(200).json({
    text: [{
      id: 1,
      name: {
        eng: "Business card website",
        ukr: "Сайт-візитка",
        rus: "Сайт-визитка",
        cz: "Webová vizitka",
        hr: "Poslovna web stranica"
      },
      description: {
        eng: "This page was made using React, Redux, Typescript and Material UI elements.",
        ukr: "Ця сторінка була зроблена з використанням React, Redux, Typescript та елементів Material UI.",
        rus: "Этот сайт был сделан с использованием React, Redux, Typescript и элементов Material UI.",
        cz: "Tato stránka byla vytvořena s použitím React, Redux, Typescript a elementů Material UI.",
        hr: "Ova stranica je stvorena pomoću React, Redux, Typescript i elementa Material UI."
      },
      url: "https://mxtsx.github.io",
      codeUrl: 'https://github.com/mxtsx/mxtsx.github.io',
    },
      {
        id: 2,
        name: {
          eng: "Social Network",
          ukr: "Соціальна мережа",
          rus: "Социальная сеть",
          cz: "Sociální síť",
          hr: "Društvena mreža"
        },
        description: {
          eng: "Page was made using React, Redux, Typescript, Formik, Axios, WebSocket and Ant Design elements.",
          ukr: "Сторінка була створена з використанням React, Redux, Typescript, Formik, Axios, WebSocket та елементів Ant Design.",
          rus: "Сайт был создан с использованием React, Redux, Typescript, Formik, Axios, WebSocket и элементов Ant Design.",
          cz: "Stránka byla vytvořena s použitím React, Redux, Typescript, Formik, Axios, WebSocket a elementů Ant Design.",
          hr: "Stranica je stvorena pomoću React, Redux, Typescript, Formik, Axios, WebSocket i elemenata Ant Design."
        },
        url: "https://mxtsx.github.io/sample-social-network",
        codeUrl: 'https://github.com/mxtsx/sample-social-network',
        notes: {
          eng: [
            "Login: free@samuraijs.com",
            "Password: free",
            "In the Safari browser: cookies - enabled; prevent cross-site tracking - disabled."
          ],
          ukr: [
            "Логін: free@samuraijs.com",
            "Пароль: free",
            "У браузері Safari: кукіс - дозволені; не стежити між сайтами - вимкнено."
          ],
          rus: [
            "Логин: free@samuraijs.com",
            "Пароль: free",
            "В браузере Safari: кукис - включены; без перекрестного отслеживания - выключено."
          ],
          cz: [
            "Přihlašovací jméno: free@samuraijs.com",
            "Heslo: free",
            "V prohlížeči Safari: cookies - zapnuto; nasledovat napříč stránkami - vypnuto."
          ],
          hr: [
            "Korisničko ime: free@samuraijs.com",
            "Lozinka: free",
            "U pregledniku Safari: cookies - uključeno; spriječi praćenje na više mj. - isključeno."
          ]
        }
      },
      {
        id: 3,
        name: {
          eng: "Social Network: Mobile App",
          ukr: "Соціальна мережа: Мобільний додаток",
          rus: "Социальная сеть: мобильное приложение",
          cz: "Sociální síť: mobilní aplikace",
          hr: "Društvena mreža: mobilna aplikacija"
        },
        description: {
          eng: "React Native App made using Expo, Redux, React Navigation v.5, Axios and React Native Async Storage.",
          ukr: "Додаток був створений за допомогою Expo, Redux, React Navigation v.5, Axios та React Native Async Storage.",
          rus: "Приложение было создано с использованием Expo, Redux, React Navigation v.5, Axios и React Native Async Storage.",
          cz: "Aplikace byla vytvořena s použitím Expo, Redux, React Navigation v.5, Axios a React Native Async Storage.",
          hr: "Aplikacija je stvorena pomoću Expo, Redux, React Navigation v.5, Axios i React Native Async Storage."
        },
        url: "https://expo.io/@mxtsx/sample-social-network",
        codeUrl: 'https://github.com/mxtsx/rn-sample-social-network-app',
        downloadUrl: "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1VL1lKdGkd0mPj7i9WTWLuGajHJhY5hW1",
        notes: {
          eng: [
            "Login: sn_guest_account@protonmail.com",
            "Password: Guest_Free_12345",
            "You can run this application on Android and iOS using Expo App, or only on Android after downloading an .apk file."
          ],
          ukr: [
            "Логін: sn_guest_account@protonmail.com",
            "Пароль: Guest_Free_12345",
            "Ви можете запустити даний додаток на Андроїді та iOS за допомогою додатку Expo, або ж завантаживши apk файл (лише для Андроїду)."
          ],
          rus: [
            "Логин: sn_guest_account@protonmail.com",
            "Пароль: Guest_Free_12345",
            "Вы можете запустить это приложение на Андроиде и iOS с помощью Expo App, либо загрузить .apk файл (только для Андроида)."
          ],
          cz: [
            "Přihlašovací jméno: sn_guest_account@protonmail.com",
            "Heslo: Guest_Free_12345",
            "Aplikaci můžete spustit na Androidu a iOS pomocí Expo App, nebo pouze na Androidu po stažení .apk souboru."
          ],
          hr: [
            "Korisničko ime: sn_guest_account@protonmail.com",
            "Lozinka: Guest_Free_12345",
            "Aplikaciju možete pokrenuti na Androidu i iOS pomoću aplikacije Expo ili samo na Androidu nakon preuzimanja .apk datoteke."
          ]
        }
      }]
  })
}
