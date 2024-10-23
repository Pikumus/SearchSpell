## Содержание

- [Описание проекта](#описание-проекта)
- [Структура проекта](#структура-проекта)
- [Установка и запуск](#установка)
- [Основные возможности](#основные-возможности)
- [Разработка](#разработка)
- [Технологии](#технологии)


# SpellsApp

## Описание проекта
**SpellsApp** — это веб-приложение для поиска и отображения списка заклинаний из вселенной Гарри Поттера, используя API. Приложение разработано на Nuxt.js с серверным рендерингом (SSR) и стилизовано с использованием Tailwind CSS.

## Структура проекта

```bash
SpellsApp/
├── .nuxt/                      # Системные файлы Nuxt.js
├── assets/                     # Статические ассеты (изображения, стили)
├── features/                   # Функциональные модули
│   └── searchSpell/            # Модуль поиска заклинаний
│       ├── data/               # Работа с данными (API, репозитории)
│       │   └── repository/
│       │       └── catalog_network_repository.ts  # Репозиторий для API заклинаний
│       ├── domain/             #  модели данных
│       ├── presentation/       # Компоненты пользовательского интерфейса
│       │   └── components/
│       │       ├── CardSpell.vue  # Карточка заклинания
│       │       └── SearchBar.vue  # Поисковая строка
│       └── stores/            # Управление состоянием (Pinia)
├── node_modules/               # Папка зависимостей проекта
├── pages/                      # Страницы приложения
│   └── spell/                  # Страницы заклинаний
│       ├── [id].vue            # Страница деталей заклинания
│       └── index.vue           # Страница списка заклинаний
├── public/                     # Публичные файлы (например, фавикон)
├── server/                     # Серверные файлы
├── .gitignore                  # Файл для исключения файлов из Git
├── app.vue                     # Главный компонент приложения
├── eslint.config.mjs           # Конфигурация ESLint
├── nuxt.config.ts              # Конфигурация Nuxt.js
├── package.json                # Описание зависимостей и скриптов
├── package-lock.json           # Версии зависимостей
├── README.md                   # Документация проекта
├── tailwind.config.ts          # Конфигурация Tailwind CSS
└── tsconfig.json               # Конфигурация TypeScript


## Установка и запуск
# 1 - Клонирование репозитория
https://github.com/Pikumus/SearchSpell.git
# 2 - Установка зависимостей
cd SpellsApp
npm install
# 3 - Запуск проекта:
npm run dev
Приложение будет доступно по адресу: http://localhost:3000

## Основные возможности
- Поиск заклинаний — компонент SearchBar.vue позволяет искать заклинания.
- Просмотр заклинаний — на страницах /spell/[id] можно посмотреть информацию о заклинании.
- SSR — серверный рендеринг для улучшения SEO и производительности.

## Разработка
Чтобы внести изменения в проект, создайте новую ветку и отправьте Pull Request:
git checkout -b название-ветки
После завершения работы создайте Pull Request в основной репозиторий.

## Технологии

- Nuxt.js — SSR (серверный рендеринг) для SEO и улучшения производительности.
- Vue.js — фреймворк для построения пользовательского интерфейса.
- Tailwind CSS — для стилизации.
- TypeScript — статическая типизация.
- Pinia — для управления состоянием.
