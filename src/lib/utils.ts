import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Форматирование цены из копеек в рубли
export function formatPrice(priceInKopecks: number): string {
  const rubles = priceInKopecks / 100;
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(rubles);
}

// Форматирование даты
export function formatDate(timestamp: number): string {
  return new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(timestamp));
}

// Генерация случайного ID
export function generateId(prefix: string = ''): string {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 8);
  return prefix ? `${prefix}-${timestamp}-${randomStr}` : `${timestamp}-${randomStr}`;
}

// Функция для получения редкости по-русски
export function getRarityInRussian(rarity: 'Common' | 'Rare' | 'Legendary'): string {
  switch (rarity) {
    case 'Common':
      return 'Обычная';
    case 'Rare':
      return 'Редкая';
    case 'Legendary':
      return 'Легендарная';
    default:
      return rarity;
  }
}

// Функция для получения цвета редкости
export function getRarityColor(rarity: 'Common' | 'Rare' | 'Legendary'): string {
  switch (rarity) {
    case 'Common':
      return 'text-gray-600 bg-gray-100';
    case 'Rare':
      return 'text-blue-600 bg-blue-100';
    case 'Legendary':
      return 'text-purple-600 bg-purple-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
}
