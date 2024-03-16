const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');


router.post('/', async (req, res) => {
    try {
        const result = await Product.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/', async (req, res) => {
    try {
        let query = {};
        const { category } = req.query;
        if (category) {
            query.category = category
        }
        const data = await Product.find(query);
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Product.findById(id);
        if (!data) {
            return res.status(404).json({ error: 'Data not found' });
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


        const existingdocument = await Product.findOne({ _id: id });
        if (!existingdocument) {
            res.status(400).json({ msg: 'document not found' })
        }


        const updatedData = await Product.findByIdAndUpdate(id, req.body);
        if (!updatedData) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.status(200).json('updated');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const updatedDocument = await Product.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        if (updatedDocument) {
            res.json(updatedDocument);
        } else {
            res.status(404).json({ message: 'Document not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedData = await Product.findByIdAndDelete(id);
        if (!deletedData) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




module.exports = router;