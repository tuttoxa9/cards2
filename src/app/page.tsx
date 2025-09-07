import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/mock';

export default function HomePage() {
  // Получаем популярные товары (первые 4)
  const popularProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero секция */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gray-200 rounded-3xl p-12 md:p-16">
            <h1 className="text-4xl md:text-6xl font-bold text-holo-text mb-6">
              Коллекция голографических карточек
            </h1>
            <p className="text-xl text-holo-text-secondary mb-8 max-w-2xl mx-auto">
              Откройте для себя уникальные голографические карточки Marvel и Cars.
              Высочайшее качество, оригинальная продукция, быстрая доставка.
            </p>
            <Button asChild size="lg">
              <Link href="/catalog">
                Перейти в каталог
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Секция категорий */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-center mb-12">Наши вселенные</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {categories.map((category) => (
              <Link key={category.id} href={`/catalog?category=${category.id}`}>
                <Card className="group h-64 relative overflow-hidden cursor-pointer">
                  <CardContent className="p-0 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-holo-accent/80 to-holo-accent-hover/80" />
                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
                      <h3 className="text-3xl font-bold mb-4">{category.name}</h3>
                      <p className="text-lg opacity-90">
                        {category.name === 'Marvel'
                          ? 'Супергерои и злодеи Marvel'
                          : 'Гоночные машины из мультфильма'
                        }
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Секция популярных товаров */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-center mb-12">Хиты продаж</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/catalog">
                Смотреть все товары
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-center mb-12">Наши преимущества</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-holo-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-holo-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Оригинальная продукция</h3>
                <p className="text-holo-text-secondary">
                  Только лицензионные голографические карточки высочайшего качества
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-holo-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-holo-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Быстрая доставка</h3>
                <p className="text-holo-text-secondary">
                  Доставляем по всей России в течение 2-5 рабочих дней
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-holo-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-holo-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Выгодные цены</h3>
                <p className="text-holo-text-secondary">
                  Лучшие цены на рынке и регулярные акции для наших покупателей
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
