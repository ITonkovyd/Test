Тестове завдання

Серверна частина (Node.js)
Створення сервера:
-Створити простий веб-сервер на Node.js, який слухає на порту 3000.
API ендпоїнти:
-Створіть API ендпоїнт /api/users, який повертає список користувачів у форматі JSON.
-Сервер повинен вміти обробляти запити GET та повертати масив об'єктів користувачів.
База даних:
-Використайте простий масив у пам'яті як базу даних для користувачів.
-Заповніть масив кількома прикладовими користувачами (ім'я, електронна пошта, тощо).
Аутентифікація (додатково):
-Реалізуйте механізм аутентифікації. Додайте ендпоїнт /api/login, який приймає електронну пошту та пароль, порівнює їх з даними у базі даних та повертає стан успішної аутентифікації.

Клієнтська частина (React)
Список користувачів:
-Створіть React компонент, який відображає список користувачів, отриманих з сервера /api/users.
Сторінка логіну:
-Створіть сторінку логіну, яка має форму для введення електронної пошти та паролю.
-При натисканні кнопки логіну, відправте запит на сервер /api/login та обробіть токен аутентифікації.
Приватна сторінка (додатково, якщо буде бажання):
-Створіть сторінку, доступну лише після успішної аутентифікації.
-При спробі доступу до цієї сторінки без аутентифікації перенаправте користувача на сторінку логіну.
Стилізація (додатково, якщо буде бажання):
-Додайте стилі за допомогою CSS або будь-якого іншого інструменту стилізації.

Загальні вказівки:
-Використовуйте сучасні стандарти та практики у своєму коді.
-Коментарі та документація повинні бути присутніми та зрозумілими.
-Використовуйте npm або yarn для управління залежностями та скриптами.
-Код повинен бути завершеним та готовим для використання.
-Це завдання має за мету перевірити навички у роботі з Node.js та React, а також вміння створювати простий механізм аутентифікації. Не соромся додавати власні ідеї або поліпшення до завдання. Успіхів!
