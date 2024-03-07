import express from 'express';
import { connect } from 'mongoose';
import authRouter from './Routes/AuthRoute.js';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json())

connect('mongodb://localhost:27017/FreshLeaf');

 
app.use('/server/auth',authRouter)


app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
