import productsData from '../../fakeData/products.json';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, price, imageURL, description, category } = req.body;
    const newProduct = {
      id: productsData.length + 1,
      name,
      price,
      imageURL,
      description,
      category,
    };
    productsData.push(newProduct);
    res.status(201).json(newProduct);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
