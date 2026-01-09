import express, {Express, Request, Response } from 'express';

const app : Express = express();

app.get('/', (req : Request, res: Response) => {
    res.json({ message: 'Main Server is running!!' });
});

export {app}