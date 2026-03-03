import { Product } from '../types/product';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Laptop Dell XPS 15',
    description:
      'Powerful laptop with 11th Gen Intel Core i7, 16GB RAM, 512GB SSD',
    price: 1299.99,
    category: 'Electronics',
    image:
      'https://res.cloudinary.com/dr135gqrc/image/upload/v1772205872/Dell-XPS-13-9343_namw2y.jpg',
    stock: 15,
    rating: 4.5,
    reviews: 128,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    description: 'Latest iPhone with A17 Pro chip, titanium design, 256GB',
    price: 999.99,
    category: 'Electronics',
    image:
      'https://s13emagst.akamaized.net/products/60458/60457155/images/res_bc44fa0bbdf0de65a3c655809352aba9.jpg',
    stock: 25,
    rating: 4.8,
    reviews: 342,
    createdAt: '2024-02-01',
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise canceling headphones',
    price: 349.99,
    category: 'Audio',
    image:
      'https://res.cloudinary.com/dr135gqrc/image/upload/v1772170920/sony-wh_zv7rdu.jpg',
    stock: 40,
    rating: 4.7,
    reviews: 256,
    createdAt: '2024-01-20',
  },
  {
    id: '4',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Flagship Android phone with S Pen, 200MP camera',
    price: 1199.99,
    category: 'Electronics',
    image:
      'https://res.cloudinary.com/dr135gqrc/image/upload/v1772170920/samsung-galaxy-s24_aqhaz8.jpg',
    stock: 18,
    rating: 4.6,
    reviews: 315,
    createdAt: '2024-02-10',
  },
  {
    id: '5',
    name: 'Apple Watch Series 9',
    description: 'Advanced health and fitness tracking smartwatch',
    price: 399.99,
    category: 'Wearables',
    image:
      'https://res.cloudinary.com/dr135gqrc/image/upload/v1772170920/apple-watch-series-9_tlmf7t.jpg',
    stock: 30,
    rating: 4.4,
    reviews: 175,
    createdAt: '2024-01-25',
  },
  {
    id: '6',
    name: 'iPad Pro 12.9"',
    description: 'M2 chip, Liquid Retina XDR display, 512GB',
    price: 1099.99,
    category: 'Tablets',
    image:
      'https://res.cloudinary.com/dr135gqrc/image/upload/v1772205338/R_yv8mz8.jpg',
    stock: 12,
    rating: 4.7,
    reviews: 94,
    createdAt: '2024-02-05',
  },
  {
    id: '7',
    name: 'Canon EOS R6',
    description: 'Full-frame mirrorless camera with 20MP sensor',
    price: 2499.99,
    category: 'Cameras',
    image:
      'https://res.cloudinary.com/dr135gqrc/image/upload/v1772205551/canon_1263c006_eos_80d_dslr_camera_1225877_bcn2i7.jpg',
    stock: 8,
    rating: 4.9,
    reviews: 67,
    createdAt: '2024-01-18',
  },
  {
    id: '8',
    name: 'Nintendo Switch OLED',
    description: 'Gaming console with vibrant OLED screen',
    price: 349.99,
    category: 'Gaming',
    image:
      'https://res.cloudinary.com/dr135gqrc/image/upload/v1772205552/DqYUnnRwGXQakhVy4PZg5o-1200-80_zbec6r.jpg',
    stock: 22,
    rating: 4.5,
    reviews: 312,
    createdAt: '2024-01-30',
  },
];
