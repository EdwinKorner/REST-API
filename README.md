# REST-API

## Vad programmet gör

Jag har gjort ett REST API med hjälp av express, nodemon och Joi.

Jag valde att göra 4 objekt, varje objekt är en person och har egenskaperna id, namn, ålder och stad.
API:et består av fyra endpoints: 
* GET
* DELETE
* POST
* PUT

Med dessa endpoints kan man hämta information, ta bort objekt, redigera objekt och lägga till objekt i API:et.

## Nodemon och Joi

Jag använder mig av nodemon i detta projektet. Nodemon gör så att programmet startas om automatiskt varje gång en fil sparas vilket sparar mycket tid.

Jag använder mig av Joi för att validera data i programmet.

## Hur man bygger och startar programmet

För att installera alla moduler kör du 

``` npm i ```

För att starta programmet kör du

``` nodemon index.js ```

## När programmet är igång
När programmet är igång kan du testa API:et med hjälp av .rest filen. Där finns möjligheten att lägga till, redigera, tabort och hämta information från API:et.

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
