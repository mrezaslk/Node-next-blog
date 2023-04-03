import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';


dotenv.config();


connectDB();

const app = express();



app.get('/', (req, res) => {
    res.send('API is working!');
})

app.use('/api/products', productRoutes);
app.use((err, req, res, next) => {
    const error = res.status(500).json({ message: err.message });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode port ${PORT}`));