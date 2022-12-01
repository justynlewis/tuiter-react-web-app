import express from 'express';
import cors from 'cors'
import HelloController from './controllers/hello-controller.js';
import tuitsController from './controllers/tuits/tuits-controller.js';
import UserController from './controllers/users/users-controller.js';
import mongoose from "mongoose";
const app = express()
const DB_CONNECTION_STRING = "mongodb+srv//giuseppi:supersecretpassword@cluster0.dusmkpf.mongodb.net/?retryWrites=true&w=majority"
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
 || 'mongodb://localhost:27017/tuiter'
 
app.use(cors())
app.use(express.json());
HelloController(app)
UserController(app)
tuitsController(app)
app.listen(process.env.PORT || 4000);
mongoose.connect(CONNECTION_STRING);


