import productsData from '../../fakeData/products.json';

export default function handler(req, res) {
  res.status(200).json(productsData);
}
