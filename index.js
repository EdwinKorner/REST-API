const Joi = require('joi');
const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.json());

// En array med 4 olika objekt som har 4 egenskaper var
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
//Första sidan som skickar ett simpelt meddelande
app.get('/', (req, res) => {
    res.send('Hello world!!');
});

//En sida som skickar alla objekt i arrayen "persons"
app.get('/api/persons', (req, res)=>{
    res.send(persons);
});

//Validering av objekt när man använder post. Jag använder joi för validering
app.post('/api/persons', (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        age: Joi.string().required(),
        city: Joi.string().required()
    });

    const result = schema.validate(req.body);

    //Validering för error 400 Bad request error

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    //Ett objekt som gör att id ökar med 1 varje gång man postar
    //Objektet har även de andra egenskaperna så att man inte kan posta utan att skriva in alla egenskaper
    const person = {
        id: persons.length + 1,
        name: req.body.name,
        age: req.body.age,
        city: req.body.city
    };

    persons.push(person);
    res.send(person);

});

//Validering för 404 Not found error
app.get('/api/persons/:id', (req, res)=>{
    const person = persons.find(c => c.id === parseInt(req.params.id));
    if (!person) res.status(404).send('The person was not found');
    res.send(person);
});

app.put('/api/persons/:id', (req, res)=>{

});

//Väljer en port som är tillgänglig. Standard porten är 3000
const port = process.env.PORT || 3000
app.listen(port, () => console.log('Listening on port ' + port))