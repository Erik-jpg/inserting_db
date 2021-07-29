const express = require('express');
const PORT = 3000;
const pets = ['A', 'V', "C"];
const app = express();
app.use(express.json());
// Get Route that responds with all pets
app.get('/api/pets', (req, res) => {
  res.json(pets);
})
// Post route that takes a new pet and adds it to pets
app.post('/api/pets', (req, res) => {
  const newPet = req.body.name;
  pets.push(newPet);
  res.status(201).end();
})
app.listen(PORT)