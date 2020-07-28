import * as cassandra from "cassandra-driver";

export default class DBConfig {
  private dbConnection: cassandra.Client = null;
  constructor() {
    if (!this.dbConnection) {
      this.dbConnection = new cassandra.Client({
        contactPoints: ["localhost"],
        keyspace: "subscriber_db",
        localDataCenter: "datacenter1",
      });
    }
  }

  public getSubscribers(): Promise<{ rows: any[] }> {
    const promise: Promise<{ rows: any[] }> = new Promise((resolve, reject) => {
      this.dbConnection.execute("SELECT * FROM subscribers", function (
        err: any,
        result: { rows: any[] }
      ) {
        if (err) {
          reject(new Error(err));
          throw err;
        } else {
          resolve(result);
        }
      });
    });
    return promise;
  }
}
