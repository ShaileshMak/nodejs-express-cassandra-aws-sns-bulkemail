import { Express } from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as subscribers from "./routes/api/subscribers";

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1/subscribers", subscribers);

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});
