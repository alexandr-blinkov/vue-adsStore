# vue-adsStore
## Демо
Внимание! Демо проект доступен только для чтения - регистрация и любые изменения данных запрещены!
```bash
Тестовый аккаунт для авторизции:
Логин: test@mail.ru
Пароль: 123456
```
https://vue-adsstore-8222f.web.app/

## Описание 
### Основные возможности
Приложение доски объявлений, с возможностью покупки/продажи товаров, написаное на Vue. В данном приложении есть:
1) Возможность добавлять новые записи, указав, название, описание и изображение.
2) Возможность смотреть список "моих" записей.
3) Возможность просмотра и покупки объявлений других пользователей.
4) Возможность просматривать информацию о заказах, а также возможность завершения выполненных заказов.

### Дополнительный возможности
1) Возможность редактирования своего объявления.
2) Возможность добавлять объявления в слайдер, по нажатию кнопки при создании.

## Запуск
### Предустановка
Для начала, вам необходимо указать свои данные от Firebase в файле: src -> main.js -> firebase.initializeApp().
Где key - поле которое требуется изменить.
Необходимую информацию вы сможете найти на сайте - https://console.firebase.google.com/
```bash
firebase.initializeApp({
  apiKey: "key",
  authDomain: "key",
  databaseURL: "key",
  projectId: "key",
  storageBucket: "key",
  messagingSenderId: "key",
  appId: "key",
  measurementId: "key"
})
```

### Установка
```bash
# Установка необходимых компонентов
$ npm install

# Для запуска приложения по адресу localhost
$ npm run serve
```

## Изображения
### Авторизация
![Счет](https://github.com/alexandr-blinkov/vue-adsStore/raw/master/public/img/github/1.png)
### Главная (доска объявлений)
![Счет](https://github.com/alexandr-blinkov/vue-adsStore/raw/master/public/img/github/2.png)
### Заказы
![Счет](https://github.com/alexandr-blinkov/vue-adsStore/raw/master/public/img/github/3.png)
### Создание новой записи
![Счет](https://github.com/alexandr-blinkov/vue-adsStore/raw/master/public/img/github/4.png)
### Мои записи
![Счет](https://github.com/alexandr-blinkov/vue-adsStore/raw/master/public/img/github/5.png)

