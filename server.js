const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userController = require('./controllers/UserController')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/user/signIn', (req, res) => userController.signin(req, res));

app.listen(3000, () => {
    console.log("API Server Running...");
});