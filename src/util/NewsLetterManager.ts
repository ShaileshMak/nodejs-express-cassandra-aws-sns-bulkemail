import Subscriber from "../models/Subscriber";
import * as aws from "aws-sdk";
import * as dotenv from "dotenv";
dotenv.config();

export default class NewsLetterManager {
  static email: string = "shailesh.makwana@hotmail.com";
  static sendNewsLetter(subscribers: Array<Subscriber>): Promise<any> {
    const emailList: Array<string> = subscribers.map((subscriber: Subscriber) =>
      subscriber.getEmail()
    );
    const awsConfig: object = {
      accessKeyId: process.env.ACCESS_KEY!,
      secretAccessKey: process.env.SECRET_ACCESS_KEY!,
      region: process.env.REGION!,
      apiVersion: process.env.API_VERSION!,
    };
    const params: aws.SES.SendEmailRequest = {
      Destination: {
        ToAddresses: emailList,
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: "<h1>Testing</h1>",
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Test email",
        },
      },
      Source: this.email,
      ReplyToAddresses: [this.email],
    };

    const sendPromise: Promise<any> = new aws.SES(awsConfig)
      .sendEmail(params)
      .promise();

    return sendPromise;
  }
}
