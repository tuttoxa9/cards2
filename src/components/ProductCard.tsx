'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { useCartStore } from '@/store/cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { formatPrice, getRarityInRussian, getRarityColor } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link href={`/product/${product.id}`}>
      <Card className="group h-full cursor-pointer">
        <CardContent className="p-0">
          {/* Изображение товара */}
          <div className="aspect-[3/4] relative overflow-hidden rounded-t-2xl">
            <Image
              src={product.image_urls[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Редкость */}
            <div className="absolute top-3 left-3">
              <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getRarityColor(product.rarity)}`}>
                {getRarityInRussian(product.rarity)}
              </span>
            </div>

            {/* Наличие */}
            {product.stock_quantity === 0 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-semibold">Нет в наличии</span>
              </div>
            )}
          </div>

          {/* Информация о товаре */}
          <div className="p-4">
            <h3 className="font-semibold text-holo-text mb-2 line-clamp-2">
              {product.name}
            </h3>

            <p className="text-sm text-holo-text-secondary mb-3 line-clamp-2">
              {product.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-holo-accent">
                {formatPrice(product.price)}
              </span>

              <span className="text-sm text-holo-text-secondary">
                {product.stock_quantity > 0 ? `${product.stock_quantity} шт.` : 'Нет в наличии'}
              </span>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            onClick={handleAddToCart}
            disabled={product.stock_quantity === 0}
            className="w-full"
            size="sm"
          >
            {product.stock_quantity === 0 ? 'Нет в наличии' : 'В корзину'}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
