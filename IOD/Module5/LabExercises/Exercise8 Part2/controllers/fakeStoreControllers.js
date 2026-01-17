const axios = require('axios');

const getProducts = (req, res) => {
    axios.get("https://fakestoreapi.com/products")
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(error => {
            console.error("Error fetching products", error);
            res.status(500).json({ error: "Failed to fetch products" });
        });
};

const getCategories = (req, res) => {
    axios.get("https://fakestoreapi.com/products/categories")
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(error => {
            console.error("Error fetching categories", error);
            res.status(500).json({ error: "Failed to fetch categories" });
        });
};




module.exports = { getProducts, getCategories };
