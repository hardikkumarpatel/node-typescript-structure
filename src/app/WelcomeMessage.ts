import { Logging } from './../config/Logging';
import { NextFunction, Request, Response } from 'express';
const NAMESPACE = 'WelcomeMessage';

const WelcomeMessage = (req: Request, res: Response, next: NextFunction) => {
    try {
        new Logging().infoMessage(NAMESPACE, `${req.url} : ${req.method}`, req.ip);
        res.status(200).send({
            success: true,
            message: 'Welcome to Node and Typescript structure!',
            about: 'Made in Node with ❤️ TypeScript.'
        });
    } catch (error) {
        new Logging().errorMessage(NAMESPACE, `${req.url} : ${req.method}`);
        res.status(500).send({
            success: false,
            error: error.message
        });
    }
};

export default WelcomeMessage;
