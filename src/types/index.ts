export interface Category {
  id: string;
  name: 'Marvel' | 'Cars';
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // в копейках
  image_urls: string[];
  stock_quantity: number;
  rarity: 'Common' | 'Rare' | 'Legendary';
  category_id: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ShippingAddress {
  country: string;
  city: string;
  street: string;
  house: string;
  apartment?: string;
  postal_code: string;
}

export interface Order {
  id: string;
  status: 'Pending' | 'Paid' | 'Shipped';
  total_amount: number; // в копейках
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  shipping_address: ShippingAddress;
  created_at: number; // timestamp
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price_per_item: number; // в копейках
}

export interface ProductFilters {
  category?: string;
  rarity?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}

export interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}
