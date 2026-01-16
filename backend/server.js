import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './router/router.js';
import pg from 'pg';
import {Session} from 'express-session';
import {Strategy} from 'passport-local';
import bcrypt from 'bcrypt';
import passport from 'passport';
import Google_Strategy from 'passport-google-oauth2';

dotenv.config(); // configure env file

const app = express(); // initalize the express
const PORT = process.env.PORT || 5000; // define the PORT

app.use(bodyParser.json()); // initalize the body-parser
app.use(express.json()); // initalize the express json
app.use(express.static('public')); // initalize the express static
app.use(cors()); // intialize the cors

app.use(router); // intialize the router 

/** configure the running PORT */
app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);

})
