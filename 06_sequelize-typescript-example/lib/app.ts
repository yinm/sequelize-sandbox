import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as errorhandler from 'strong-error-handler';
import {movies} from './routes/movies';
import {actors} from './routes/actors';

export const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json({limit: '5mb'}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Expose-Headers", "x-total-count");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type,authorization");

  next();
});

app.use('/movies', movies);
app.use('/actors', actors);

app.use(errorhandler({
  debug: process.env.ENV !== 'prod',
  log: true,
}));
