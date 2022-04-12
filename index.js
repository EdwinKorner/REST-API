const Joi = require('joi');
const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.json());

const persons = [
    {
        id:1,
        name: 'Edwin',
        age: '20',
        city: 'Göteborg'
    },

    {
        id:2,
        name: 'Adrian',
        age: '19',
        city: 'Göteborg'
    },

    {
        id:3,
        name: 'William',
        age: '19',
        city: 'Malmö'
    },

    {
        id:4,
        name: 'Otto',
        age: '19',
        city: 'Göteborg'
    }
]

app.get('/', (req, res) => {
    res.send('Hello world!!');
});

app.get('/api/persons', (req, res)=>{
    res.send(persons);
});

app.post('/api/persons', (req, res) => {
    //Validering för error 400 Bad request
    if(!req.body.name || req.body.name.length < 3){
        res.status(400).send('Name is required and has a minimum length of 3');
        return;
    } else if(!req.body.age){
        res.status(400).send('Age is required');
        return;
    } else if (!req.body.city){
        res.status(400).send('City is required');
        return;
    }

    const person = {
        id: persons.length + 1,
        name: req.body.name,
        age: req.body.age,
        city: req.body.city
    };

    persons.push(person);
    res.send(person);

});

app.get('/api/persons/:id', (req, res)=>{
    const person = persons.find(c => c.id === parseInt(req.params.id));
    if (!person) res.status(404).send('The person was not found');
    res.send(person);
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Listening on port ' + port))