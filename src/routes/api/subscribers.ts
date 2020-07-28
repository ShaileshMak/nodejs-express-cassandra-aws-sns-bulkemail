import { Request, Response } from "express";
import * as express from "express";
import NewsLetterManager from "../../util/NewsLetterManager";
import Subscriber from "../../models/Subscriber";
import DBConfig from "./../../db/DBConfig";

const router: express.Router = express.Router();
const db: DBConfig = new DBConfig();

router.get("/newLetter/send", (req: Request, resp: Response) => {
  let subscribers: Array<Subscriber> = [];
  let subscriber: Subscriber = null;
  db.getSubscribers()
    .then((result: { rows: any[] }) => {
      result.rows.map((row) => {
        subscriber = new Subscriber(row.id, row.user_name, row.user_email);
        subscribers.push(subscriber);
      });
      NewsLetterManager.sendNewsLetter(subscribers)
        .then((data: any) => {
          console.log(JSON.stringify(data));
          resp
            .status(200)
            .json({ success: "Email sent successfully to all subscribers!" });
        })
        .catch((error: Error) => {
          console.log(JSON.stringify(error));
          resp.status(404).json(error);
        })
        .finally(() => {
          console.log("finally");
        });
    })
    .catch((error: Error) => {
      console.log(error.message);
    });
});

export = router;
