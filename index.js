const Joi = require('joi');
const { response } = require('express');
const express = require('express');
const app = express();
const {nanoid, customAlphabet}  = require('nanoid')

//Jag använde nanoID eftersom att man kan välja hur stor stringen ska vara och vad som ska få ingå i stringen. 
//Jag valde att använda en string med längden 5 som endast får använda sig av siffror
const nanoidAlphabet = customAlphabet("1234567890" , 5)

app.use(express.json());

// En array med 4 olika objekt som har 4 egenskaper var
const persons = [
    {
        id: nanoidAlphabet(),
        name: 'Edwin',
        age: '20',
        city: 'Göteborg'
    },

    {
        id: nanoidAlphabet(),
        name: 'Adrian',
        age: '19',
        city: 'Göteborg'
    },

    {
        id:nanoidAlphabet(),
        name: 'William',
        age: '19',
        city: 'Malmö'
    },

    {
        id:nanoidAlphabet(),
        name: 'Otto',
        age: '19',
        city: 'Göteborg'
    }
]
//Första sidan som skickar ett simpelt meddelande
app.get('/', (req, res) => {
    res.send('Gå till /api/persons för att se de olika objekten');
});

//En sida som skickar alla objekt i arrayen "persons"
app.get('/api/persons', (req, res)=>{
    res.send(persons);
});

//Validering för 404 Not found error
app.get('/api/persons/:id', (req, res)=>{
    const person = persons.find(c => c.id === (req.params.id));
    if (!person) return res.status(404).send('The person was not found');
    res.send(person);
});

//Här använder jag mig av funktionen "validatePerson" som jag har gjort längre ner i koden
//Jag använder mig av denna funktionen på fler ställen i koden
app.post('/api/persons', (req, res) => {
    const { error } = validatePerson(req.body);

    if(error) return res.status(400).send(error.details[0].message);
    

    //Ett objekt som gör att id ökar med 1 varje gång man postar
    //Objektet har även de andra egenskaperna så att man inte kan posta utan att skriva in alla egenskaper
    const person = {
        id: nanoidAlphabet(),
        name: req.body.name,
        age: req.body.age,
        city: req.body.city
    };

    persons.push(person);
    res.send(person);

});

//Kod för att redigera objekten
app.put('/api/persons/:id', (req, res)=>{

    const person = persons.find(c => c.id === req.params.id);
    if (!person) return res.status(404).send('The person was not found');
    
    const { error } = validatePerson(req.body);

    if(error) return res.status(400).send(error.details[0].message);
        

    person.name = req.body.name;
    person.age = req.body.age;
    person.city = req.body.city;
    res.send(person);
});

//En funktion för validering av objekt. Jag använder joi för validering
function validatePerson(person) {

    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        city: Joi.string().required(),
        age: Joi.string().required()
    });

    return schema.validate(person);

}

//Kod för att ta bort ett objekt ur persons arrayen
app.delete('/api/persons/:id', (req, res) => {

    const person = persons.find(c => c.id === req.params.id);
    if (!person) return res.status(404).send('The person was not found');

    const index = persons.indexOf(person);
    persons.splice(index, 1);

    res.send(person);

})

//Väljer en port som är tillgänglig. Standard porten är 3000
const port = process.env.PORT || 3000
app.listen(port, () => console.log('Listening on port ' + port))