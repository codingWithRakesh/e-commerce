import { app } from "./src/app.js";

const PORT: number = Number(process.env.PORT) || 8000;

app.listen(PORT, () => {
    console.log(`Main Server is running on port ${PORT}`);
});