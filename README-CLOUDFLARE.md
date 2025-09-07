# Деплой проекта на Cloudflare Pages

Этот документ содержит инструкции по деплою Next.js приложения "Коллекция голографических карточек" на Cloudflare Pages.

## Подготовка проекта

Проект уже подготовлен для деплоя на Cloudflare Pages. Были внесены следующие изменения:

### 1. Конфигурация Next.js
В файле `next.config.js` добавлены настройки для статического экспорта:
- `output: 'export'` - включает статический экспорт
- `distDir: 'out'` - указывает папку вывода
- `trailingSlash: true` - добавляет слеши в конце URL

### 2. Файлы конфигурации Cloudflare
- `wrangler.toml` - основной конфигурационный файл
- `public/_headers` - настройки заголовков безопасности и кэширования
- `public/_redirects` - перенаправления для SPA маршрутизации

### 3. Скрипты сборки
В `package.json` добавлен скрипт `build:cf` для сборки под Cloudflare Pages.

## Способы деплоя

### Способ 1: Через интерфейс Cloudflare Pages

1. **Войдите в Cloudflare Dashboard:**
   - Перейдите на https://dash.cloudflare.com/
   - Войдите в свой аккаунт

2. **Создайте новый проект Pages:**
   - Выберите "Workers & Pages" в боковом меню
   - Нажмите "Create application"
   - Выберите "Pages"
   - Выберите "Connect to Git"

3. **Подключите репозиторий:**
   - Выберите GitHub (или другую платформу)
   - Найдите репозиторий `tuttoxa9/cards2`
   - Нажмите "Begin setup"

4. **Настройте сборку:**
   - **Project name:** `cards2` (или любое другое имя)
   - **Production branch:** `main`
   - **Build command:** `bun run build:cf`
   - **Build output directory:** `out`

5. **Переменные окружения (если нужны):**
   - Пока не требуются для данного проекта

6. **Деплой:**
   - Нажмите "Save and Deploy"
   - Дождитесь завершения сборки

### Способ 2: Через Wrangler CLI

1. **Установите Wrangler:**
   ```bash
   npm install -g wrangler
   # или
   bun install -g wrangler
   ```

2. **Авторизуйтесь:**
   ```bash
   wrangler login
   ```

3. **Соберите проект:**
   ```bash
   bun run build:cf
   ```

4. **Деплойте:**
   ```bash
   wrangler pages deploy out --project-name cards2
   ```

### Способ 3: Прямая загрузка

1. **Соберите проект локально:**
   ```bash
   bun install
   bun run build:cf
   ```

2. **Создайте архив:**
   ```bash
   cd out
   zip -r ../site.zip .
   cd ..
   ```

3. **Загрузите через интерфейс:**
   - Перейдите в Cloudflare Dashboard
   - Workers & Pages → Create application → Pages → Upload assets
   - Загрузите файл `site.zip`

## Настройка домена

После успешного деплоя:

1. **Получите URL:**
   - Cloudflare автоматически создаст URL вида `cards2.pages.dev`

2. **Настройка кастомного домена (опционально):**
   - В настройках проекта Pages выберите "Custom domains"
   - Добавьте свой домен
   - Настройте DNS записи согласно инструкциям

## Автоматические деплои

При настройке через Git, каждый push в ветку `main` будет автоматически запускать новый деплой.

## Мониторинг и логи

- Все деплои и их статус можно отслеживать в Cloudflare Dashboard
- Логи сборки доступны для каждого деплоя
- Analytics доступна в разделе "Analytics"

## Особенности проекта

### Изображения
Проект использует внешние изображения с доменов:
- source.unsplash.com
- images.unsplash.com
- ext.same-assets.com
- ugc.same-assets.com

Все изображения настроены как `unoptimized: true` для совместимости со статическим экспортом.

### Маршрутизация
Настроена SPA маршрутизация через файл `_redirects`, все запросы перенаправляются на `index.html`.

### Заголовки безопасности
Настроены базовые заголовки безопасности и кэширования в файле `_headers`.

## Команды для разработки

```bash
# Установка зависимостей
bun install

# Запуск dev сервера
bun run dev

# Локальная сборка для Cloudflare
bun run build:cf

# Проверка типов и линтинг
bun run lint

# Форматирование кода
bun run format
```

## Поддержка

При возникновении проблем:
1. Проверьте логи сборки в Cloudflare Dashboard
2. Убедитесь, что все файлы конфигурации присутствуют
3. Проверьте совместимость версий Next.js с Cloudflare Pages

## Полезные ссылки

- [Документация Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
