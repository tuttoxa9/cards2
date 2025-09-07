'use client';

import Link from 'next/link';
import { useCartStore } from '@/store/cart';
import { Button } from '@/components/ui/button';

export default function Header() {
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-holo-container/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Логотип */}
        <Link href="/" className="text-2xl font-bold text-holo-accent">
          Holo-Cards
        </Link>

        {/* Навигация (скрыта на мобильных) */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/catalog"
            className="text-holo-text hover:text-holo-accent transition-colors"
          >
            Каталог
          </Link>
          <Link
            href="/about"
            className="text-holo-text hover:text-holo-accent transition-colors"
          >
            О нас
          </Link>
          <Link
            href="/shipping"
            className="text-holo-text hover:text-holo-accent transition-colors"
          >
            Доставка
          </Link>
        </nav>

        {/* Корзина и мобильное меню */}
        <div className="flex items-center space-x-4">
          {/* Иконка корзины */}
          <Link href="/cart" className="relative">
            <Button variant="ghost" size="icon" className="relative">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13h10m0 0v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-holo-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>

          {/* Гамбургер меню (только на мобильных) */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
