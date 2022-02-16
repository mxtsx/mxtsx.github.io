import type {NextApiRequest, NextApiResponse} from 'next'
import {IHeader} from "../../types/header.types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IHeader>
) {
  res.status(200).json({
    navbarText: [
      {
        title: {
          eng: "Home",
          ukr: "Головна сторінка",
          rus: "Главная страница",
          cz: "Domů",
          hr: "Početna stranica"
        },
        path: "/",
        id: 1
      },
      {
        title: {
          eng: "About",
          ukr: "Про мене",
          rus: "Обо мне",
          cz: "O mně",
          hr: "O meni"
        },
        path: "/about",
        id: 2
      },
      {
        title: {
          eng: "Portfolio",
          ukr: "Портфоліо",
          rus: "Портфолио",
          cz: "Portfolio",
          hr: "Portfolio"
        },
        path: "/portfolio",
        id: 3
      },
      {
        title: {
          eng: "Contact",
          ukr: "Контакти",
          rus: "Контакты",
          cz: "Kontakty",
          hr: "Kontakt"
        },
        path: "/contacts",
        id: 4
      }
    ]
  })
}
