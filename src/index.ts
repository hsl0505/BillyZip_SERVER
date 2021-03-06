import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as morgan from 'morgan';
import 'dotenv/config';

// Import Routers
import { usersRouter } from './routes/users';
import { housesRouter } from './routes/houses';
import { favsRouter } from './routes/favs';
import { applicationRouter } from './routes/application';
import { paymentRouter } from './routes/payment';
import { authRouter } from './routes/auth';
import { forumRouter } from './routes/forum';

// Connect typeORM mysql
createConnection()
  .then(() => {
    console.log('Database Connected :)');
  })
  .catch((error) => console.log(error));

// Create express server
const app = express();

// middlewares
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(morgan('dev'));
app.use(
  cors({
    origin: [`${process.env.TEST_IP}`],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);

// Routes
app.use('/users', usersRouter);
app.use('/houses', housesRouter);
app.use('/favs', favsRouter);
app.use('/application', applicationRouter);
app.use('/payment', paymentRouter);
app.use('/auth', authRouter);
app.use('/forum', forumRouter);

export default app;
