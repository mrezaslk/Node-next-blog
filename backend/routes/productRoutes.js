import express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';


// 
const router = express.Router();

// @route   GET /api/products

// @desc   Fetch all products
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}))

//  @desc   Fetch single product
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else { 
        res.status(404).json({ message: 'Product not found' });
    }
}))

export default router;