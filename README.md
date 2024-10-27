# React Project Hackathon Team 5

This repository is for the React project of Hackathon Team 5.

# Team

- ![Kristina](https://github.com/KristinaBalashova)
- ![Pavel](https://github.com/Developer2220)
- ![Elvira](https://github.com/Elvira-del)
- ![Maria](https://github.com/Maria2721)
- ![Mikhail](https://github.com/Mike-Zakharov)

## Deploy

- https://react-event-5.pages.dev/catalog

## Technology Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Toastify](https://img.shields.io/badge/Toastify-FF3D00?style=for-the-badge&logo=react&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)

## Что сделано

- Авторизация

сделана форма авторизации, добавлены Protected Routes: если пользователь не авторизован, его перенаправляет страницу Входа
есть минимальная обработка ошибок (подсветка полей в случае отсутствия пароля или логина),
информация о серверных ошибках рядом с формой. После успешной авторизации юзер перенаправлен на страницу Списка Запросов

- Меню профиля в шапке

сделано меню, оно перенаправляет пользователя на страницу Профиля, содержит кнопку выхода (не работает)

- Страница списка запросов

Сделана страница списка Запросов, загружаются и отобращаются запросы. Добавлены фильтры, поиск и пагинация, но их настройки не применяется к отображению данных. Поиск и фильтрация передают значения в квери, кнопка Сбросить удаляет все фильтры с панели и поисковой строки

- Карточка запроса

Сделана карточка запроса, карточка получает данные, отображает информацию о запросе, избранное и пожертвования не работают

- Страница Запроса

Сделана карточка запроса, карточка получает данные, отображает информацию о запросе, избранное и пожертвования не работают

- Страница Профиля

Сделаны вкладки личные данные и контакты, отображается информация о пользователе, кнопка выхода

## Installation

To run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KristinaBalashova/react-event-5
   ```
2. **Navigate to the project directory:**
   ```bash
   cd react-event-5
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```

## Code Quality and Formatting

To ensure the project follows the code style and maintains code quality, use:

1. **Linting:**
   ```bash
   npm run lint
   ```
2. **Formatting**
   ```bash
   npm run format
   ```
