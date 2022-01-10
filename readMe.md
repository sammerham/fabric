# Media App

Small full stack app backend is done with Node Express and front end is done with react.

This app is fetching data on the backend from an API when button is clicked, once the data is fetched, if record is unique, it gets stored in local db.

## Backend (Node Express)

Use the node package manager to install  install all the dependencies.

```bash
npm install
```
### API key
Add your API Key in .envSample and then rename that file into (.env).
You can get your API key from below link after your sign up:

http://www.omdbapi.com/apikey.aspx

### Starting Server 3001
```bash
node server.js
```
### Testing
Tests are written using Jest and SuperTest, to run tests:
```bash
jest
or
npm run test
```
## Frontend (React)
Use the node package manager to install  install all the dependencies.

```bash
npm install
```
### Starting App server 3000
```bash
npm start
```
### Testing
Tests are written using React Testing Library,to run tests:
```bash
npm run test
```