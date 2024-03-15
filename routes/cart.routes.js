const express = require('express');
const router = express.Router();
const CartModel = require('../models/cart.model');


router.post('/', async (req, res) => {
    try {
        // const data = await CartModel.find({ product: req.product });
        // if (data) {
        //     res.status(202).json({ message: 'Product already into cart' });
        // }
        const result = await CartModel.create(req.body);
        res.status(201).json({ data: result, message: 'Item added to cart!..' });
    } catch (error) {
        console.error(error);
        console.log(error?.message)
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await CartModel.find().populate('product');
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await CartModel.findById(id).populate('product');
        if (!data) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/:id', async (req, res) => {
    try {


        const { id } = req.params;


        const existingdocument = await CartModel.findOne({ _id: id });
        if (!existingdocument) {
            res.status(400).json({ message: 'Item not found' })
        }


        const updatedData = await CartModel.findByIdAndUpdate(id, req.body);
        if (!updatedData) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Item updated succesfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const updatedDocument = await CartModel.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        if (updatedDocument) {
            res.json(updatedDocument);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedData = await CartModel.findByIdAndDelete(id);
        if (!deletedData) {
            return res.status(404).json({ error: 'Cart Item not found' });
        }
        res.status(200).json({ message: 'Cart Item deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});




module.exports = router;