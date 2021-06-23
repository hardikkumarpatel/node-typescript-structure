import express  from 'express';
import WelcomeMessage from './WelcomeMessage';
const app = express();
app.use(express.json());
const NAMESPACE = 'App';

app.use('/', WelcomeMessage);

export default app;
