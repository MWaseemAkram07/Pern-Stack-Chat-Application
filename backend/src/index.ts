import express from 'express';
import dotEnv from "dotenv";
import authRoute from "./routes/auth.route.js"
import messageRoute from "./routes/message.route.js"
dotEnv.config();

const app = express();

app.use('/api/auth', authRoute);
app.use('/api/messages', messageRoute);

app.listen(5000, () => {
    console.log(`port is running at ${5000}`)
});