# RTW — сайт «Крахмал и патока оптом»

Next.js 16 (App Router) + Tailwind CSS 4 + shadcn/ui + Magic UI. Первый экран — живая патока на WebGL2 (`src/components/syrup-canvas.tsx`).

## Запуск

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Нужен Node.js 20.9 или новее.

## Публикация на Vercel

1. Залейте проект в репозиторий GitHub (или установите Vercel CLI: `npm i -g vercel`).
2. На vercel.com создайте проект из репозитория — настройки Next.js определятся сами.
3. В Settings → Environment Variables добавьте `NEXT_PUBLIC_SITE_URL` — адрес сайта, например `https://rtw.uz`.
   Он используется в sitemap.xml, robots.txt и превью для соцсетей.
4. Deploy. Свой домен подключается в Settings → Domains.

## Перед запуском в продакшен

- **Заявки никуда не доставляются.** `src/app/api/callback/route.ts` пока только пишет заявку в лог сервера, а форма показывает «Заявка принята». Подключите отправку в Telegram-бот, на почту или в CRM.
- **Минимальная партия** у «Патока кислотная» и «Глюкозно-фруктозный сироп» показана как «уточняйте у менеджера» — впишите значения в `src/lib/catalog.ts` (`minKg`, `minLabel`).

## Где что лежит

| Что | Где |
| --- | --- |
| Товары, цены, описания | `src/lib/catalog.ts` |
| Телефоны, адрес, отрасли, вопросы, доставка, галерея, новости | `src/lib/site.ts` |
| Фото | `public/images/` |
| Цвета и шрифты | конец `src/app/globals.css`, `src/app/layout.tsx` |
| Дизайн-система | `DESIGN.md` |
| Корзина (хранится в браузере посетителя) | `src/lib/cart.tsx` |
