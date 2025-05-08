import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const products = {
  "123456789": { name: "Coca-Cola", price: 1.25 },
  "987654321": { name: "Pepsi", price: 1.15 },
  "456789123": { name: "Sprite", price: 1.20 },
  "1122334455": { name: "Water Bottle", price: 0.99 }
};

app.get('/api/product', (req, res) => {
  const barcode = req.query.barcode;
  const product = products[barcode];

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
