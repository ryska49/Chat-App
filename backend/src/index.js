import express from 'express';
const app = express();
const port = 3000;
import { connect } from 'mongoose';
import authRoutes from './routes/auth.route.js';


// connecting to MongoDB
connect('mongodb://localhost:27017/chat-app').then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
})

app.use('/api/auth' , authRoutes);

// server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})