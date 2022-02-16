import type {NextApiRequest, NextApiResponse} from 'next'
import {IContacts} from "../../types/contact.types";
import github from "../../public/github.svg";
import linkedin from "../../public/linkedin-round.svg";
import email from "../../public/email-round.svg";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IContacts>
) {
  res.status(200).json({
    contacts: [
      {
        image: github.src,
        url: "https://github.com/mxtsx",
        name: "Github",
        id: 1
      },
      {
        image: linkedin.src,
        url: "https://www.linkedin.com/in/mxtsx/",
        name: "LinkedIn",
        id: 2
      },
      {
        image: email.src,
        url: "mailto: mxtsx@pm.me",
        name: "mxtsx@pm.me",
        id: 3
      }
    ]
  })
}
