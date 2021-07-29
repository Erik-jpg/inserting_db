const express = require('express');;
const mysql = require('mysql2');
require('dotenv').config();
const PORT = 3000;
const require = require('MYSQL_PASSWORD');
const pets = ['A', 'V', "C"];
const app = express();
app.use(express.json());
// Get Route that responds with all pets
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
      database: 'pets_db'
    },
    console.log('connected to db!')
);

app.get('/api/pets', (req, res) => {
  res.json(pets);
})

db.query('SELECT * FROM pets', function (err, results) {
    console.log(results);
});
// Post route that takes a new pet and adds it to pets
app.post('/api/pets', (req, res) => {
  const newPet = req.body.name;
  pets.push(newPet);
  res.status(201).end();
})
app.listen(PORT, (req, res) => {
    console.log(`listening on port ${PORT}`);
})
