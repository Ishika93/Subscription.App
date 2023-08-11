const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_db_user',
  password: 'your_db_password',
  database: 'subscription_app_db',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to database');
  }
});

app.post('/subscribe', (req, res) => {
  const { plan, interval, stripeToken } = req.body;

  // Here, you would integrate with Stripe API to create a subscription

  // Store subscription details in the database
  const query = 'INSERT INTO subscriptions (plan, interval, stripeToken) VALUES (?, ?, ?)';
  db.query(query, [plan, interval, stripeToken], (err, result) => {
    if (err) {
      console.error('Error storing subscription:', err);
      res.status(500).send('Error storing subscription');
    } else {
      res.status(200).send('Subscription successful');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
