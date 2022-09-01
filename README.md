# Приложение "Личный кабинет"

В приложении реализованы 2 страницы:

1. Страница входа и регистрации.
2. Страница со списком контактов.

Реализован следующий фунционал:

- Регистрация новых пользователей;
- Авторизация с использованием jwt-токена;
- Добавление, удаление, редактирование контактов;
- Поиск контактов на странице.

Фронтенд написан на React + Typescript. <br>
Версия node.js - 16.16.0. <br>
Для управления состоянием используется Redux Toolkit. <br> Использованы компоненты из UI библиотеки Ant Design. <br>
Для бекенда используется json-server и json-server-auth.

## Демо
Посмотреть можно по ссылке: <a href="https://contactspage.herokuapp.com">https://contactspage.herokuapp.com</a> <br>
Данные для входа: <br>
Email: root@root.com <br>
Пароль: root

## Установка

```console
git clone https://github.com/vadmitriev/contacts
```

```console
cd contacts
cp env.sample .env
```

```console
npm install
```

```console
npm run dev
```
