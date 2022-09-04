# Приложение "Сокращение ссылок"

В приложении реализованы 2 страницы:

1. Страница входа и регистрации.
2. Страница для сокращения ссылок.

Реализован следующий фунционал:

- Регистрация новых пользователей;
- Авторизация с использованием jwt-токена;
- Добавление произвольного количества ссылок;
- Генерация QR-кода для ссылок;
- Просмотр количества переходов по ссылке;
- Поиск ссылок на странице.

Фронтенд написан на React + Typescript. <br>
Версия node.js - 16.16.0. <br>
Для управления состоянием используется Redux Toolkit. <br>
Использованы компоненты из UI библиотеки Material UI. <br>

## Демо

Посмотреть можно по ссылке: <a href="https://dashing-praline-c57108.netlify.app" target="_blank">https://dashing-praline-c57108.netlify.app</a> <br>
Данные для входа: <br>
Логин: `test` <br>
Пароль: `test`

## Установка

```console
git clone https://github.com/vadmitriev/shorturl
```

```console
cd shorturl
cp env.sample .env
```

В файле `.env` необходимо указать значение переменной `REACT_APP_URL` как URL бекенда, где реализован сервис по сокращению ссылок.

### С использованием Docker-compose

```console
docker-compose build
```

```console
docker-compose up
```

### Локально

```console
npm install
```

```console
npm run dev
```
