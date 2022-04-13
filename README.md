# REST-API

## Vad programmet gör

Jag har gjort ett REST API med hjälp av express, nodemon och Joi.

Jag valde att göra 4 objekt, varje objekt är en person och har egenskaperna id, namn, ålder och stad.
API:et består av fyra endpoints: 
* GET
* DELETE
* POST
* PUT

Med dessa endpoints kan man hämta information, ta bort objekt, redigera objekt och lägga till objekt från API:et.

## Nodemon och Joi

Jag använder mig av nodemon i detta projektet. Nodemon gör så att programmet startas om automatiskt varje gång en fil sparas vilket sparar mycket tid.

Jag använder mig av Joi för att validera data i programmet.

## Hur man bygger och startar programmet

För att installera alla moduler kör du 

``` npm i ```

För att starta programmet kör du

``` nodemon index.js ```

## När programmet är igång
För att se programmet går du in på localhost: följt av porten som skrivs ut i terminalen.
Första sidan består endast av en ensam string.

Man kan se programmet i sin webbläsare om man vill.
För att se alla objekt på samma sida går man till http://localhost:3000/api/persons.

För att se ett ensamt objekt går man till http://localhost:3000/api/persons/ följt av en siffra, från början finns det 4 olika objekt.

## Testning av API

Jag använde mig av Postman för att testa mitt API men man kan även använda sig av andra programm för att testa API:et.

## Errors
Det finns 2 olika errors man kan stöta på:
* 404 Not found
* 400 Bad request

## Uppfyllda krav

Jag har uppfyllt alla krav för betyget G

### Länkar

* [Github Repo](https://github.com/EdwinKorner/REST-API)

* [Joi](https://www.npmjs.com/package/joi)

* [Express](https://expressjs.com/en/4x/api.html)

* [Nodemon](https://www.npmjs.com/package/nodemon)