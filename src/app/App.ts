import logging from '../config/Logging';
import express, { NextFunction, Request, Response } from 'express';
const app = express();
const NAMESPACE = 'App';
app.use(express.json());

app.use('/', (req: Request, res: Response, next: NextFunction) => {
    try {
        logging.infoMessage(NAMESPACE, `${req.url} : ${req.method}`, req.ip);
        res.status(200).send({
            success: true,
            message: 'Welcome to Node and Typescript structure!',
            about: 'Made in Node with ❤️ TypeScript.'
        });
    } catch (error) {
        logging.errorMessage(NAMESPACE, `${req.url} : ${req.method}`);
        res.status(500).send({
            success: false,
            error: error.message
        });
    }
});

export default app;
