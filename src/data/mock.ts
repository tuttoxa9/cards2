import { Category, Product } from '@/types';

export const categories: Category[] = [
  { id: 'marvel', name: 'Marvel' },
  { id: 'cars', name: 'Cars' }
];

export const products: Product[] = [
  // Marvel cards
  {
    id: 'marvel-spiderman-rare',
    name: 'Spider-Man Holographic Card',
    description: 'Редкая голографическая карточка Spider-Man с эффектом движения. Отличное качество печати и яркие цвета.',
    price: 1500, // 15.00 руб
    image_urls: [
      'https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=400&h=600&fit=crop'
    ],
    stock_quantity: 25,
    rarity: 'Rare',
    category_id: 'marvel'
  },
  {
    id: 'marvel-ironman-legendary',
    name: 'Iron Man Legendary Hologram',
    description: 'Легендарная голографическая карточка Iron Man с уникальным голографическим эффектом. Лимитированная серия.',
    price: 3000, // 30.00 руб
    image_urls: [
      'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop'
    ],
    stock_quantity: 10,
    rarity: 'Legendary',
    category_id: 'marvel'
  },
  {
    id: 'marvel-hulk-common',
    name: 'Hulk Common Card',
    description: 'Обычная голографическая карточка Hulk. Отличный старт для новых коллекционеров.',
    price: 800, // 8.00 руб
    image_urls: [
      'https://images.unsplash.com/photo-1599814518830-82edc0a47011?w=400&h=600&fit=crop'
    ],
    stock_quantity: 50,
    rarity: 'Common',
    category_id: 'marvel'
  },
  {
    id: 'marvel-captain-rare',
    name: 'Captain America Shield',
    description: 'Редкая карточка Captain America с голографическим щитом. Потрясающий визуальный эффект.',
    price: 1800, // 18.00 руб
    image_urls: [
      'https://images.unsplash.com/photo-1586878146918-bc1cb6b4ab2a?w=400&h=600&fit=crop'
    ],
    stock_quantity: 30,
    rarity: 'Rare',
    category_id: 'marvel'
  },

  // Cars cards
  {
    id: 'cars-lightning-legendary',
    name: 'Lightning McQueen Legendary',
    description: 'Легендарная голографическая карточка Lightning McQueen с эффектом движения по трассе.',
    price: 2500, // 25.00 руб
    image_urls: [
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=600&fit=crop'
    ],
    stock_quantity: 15,
    rarity: 'Legendary',
    category_id: 'cars'
  },
  {
    id: 'cars-mater-common',
    name: 'Mater Tow Truck',
    description: 'Обычная голографическая карточка Mater. Классический персонаж из мультфильма Cars.',
    price: 700, // 7.00 руб
    image_urls: [
      'https://images.unsplash.com/photo-1494976121024-4b612a97eced?w=400&h=600&fit=crop'
    ],
    stock_quantity: 40,
    rarity: 'Common',
    category_id: 'cars'
  },
  {
    id: 'cars-sally-rare',
    name: 'Sally Carrera Rare',
    description: 'Редкая голографическая карточка Sally Carrera с эффектом блеска.',
    price: 1600, // 16.00 руб
    image_urls: [
      'https://images.unsplash.com/photo-1572656763671-c923c8b43c73?w=400&h=600&fit=crop'
    ],
    stock_quantity: 20,
    rarity: 'Rare',
    category_id: 'cars'
  },
  {
    id: 'cars-francesco-rare',
    name: 'Francesco Bernoulli Racing',
    description: 'Редкая карточка Francesco Bernoulli в гоночной ливрее. Динамичный голографический эффект.',
    price: 1700, // 17.00 руб
    image_urls: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop'
    ],
    stock_quantity: 18,
    rarity: 'Rare',
    category_id: 'cars'
  }
];

// Функции для работы с mock данными
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category_id === categoryId);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};
