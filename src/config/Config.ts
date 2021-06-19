import dotenv from 'dotenv';
dotenv.config();
const SERVER_HOSTNAME: string = process.env.HOST || 'localhost';
const SERVER_PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5080;
const SERVER_BACKLOG: number = 5090;

const SERVER = {
    HOSTNAME: SERVER_HOSTNAME,
    PORT: SERVER_PORT,
    BACKLOG: SERVER_BACKLOG
};

export default SERVER;
