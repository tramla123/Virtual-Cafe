import express from "express";
import db from "./config/database.js";
import userRoutes from "./routes/index.js";
import cors from "cors";
 
const app = express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);
 
app.listen(8080, () => console.log('Server running at port 8080'));