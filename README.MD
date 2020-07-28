# nodejs-express-cassandra-aws-sns-bulkemail

Full Stack nodejs express cassandra application for sending emails using AWS SNS

Create AWS SES profile in amazon site and add email addresses and verify it

- EndPoint to send emails

```
localhost:5000/api/v1/subscribers/newLetter/send
```

- CASSANDRA SCRIPTS

-KEYSPACE CREATION SCRIPT

```
CREATE KEYSPACE subscriber_db
  WITH REPLICATION = {
   'class' : 'SimpleStrategy',
   'replication_factor' : 1
  };
```

-DB CREATION SCRIPT

```
CREATE TABLE subscribers (
	id int PRIMARY KEY,
	user_name text,
	user_email text
);
```

-DATA INSERT SCRIPT

```
INSERT INTO subscriber_db.subscribers_v1 (id, user_name, user_email)
		VALUES(1, 'John.Doe', 'john.doe@xyz.com');
```
