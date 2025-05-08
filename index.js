import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const products = {
  "4800110026909": { name: "Ho-Mi Pancit Canton", price: 10.0 },
  "4800575140370": { name: "Alaska Evap", price: 82.5 },
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
