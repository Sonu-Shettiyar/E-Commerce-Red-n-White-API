
const express = require('express');
const productRoutes = require('./routes/product.routes');
const cartRoutes = require('./routes/cart.routes');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());

app.use('/products', productRoutes);
app.use('/cart', cartRoutes);


app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`Server is running on Port:${PORT}`);
    } catch (error) {
        console.error(error)
        process.exit(1);
    }
});
