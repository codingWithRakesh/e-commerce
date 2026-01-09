import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Util Server is running!!' });
});

export { app };