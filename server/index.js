const express = require('express');

const app = express();

app.use(express.json());

const getProducts = require('./getProducts')


//endpoint that will send our array of products to the client
app.get('/api/products', getProducts.getProducts)

//endpoint that will send back a single product
app.get('/api/product/:id', getProducts.getProductById)
























app.listen(3000, () => console.log('server is listening on port 3000'))