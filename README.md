# Изучение Redux

1. Установка create-react-app (CRA) 
2. Установка пакетов redux react-redux
3. Настройка точки входа для redux-приложения (src/index.js), в которой обернули все в Provider. Так же вынесли для будущего удобства настройку store в отдельный файл.
4. Создан "корневой редьюсер" (rootReducer) (src/reducers/index.js). Корневой редьюсер - это и есть представление всего нашего состояния приложения (то есть, всего нашего store).
5. Связывание данных из store с компонентами приложения. "Вытаскиваем" данные из стора в компонент, с помощью connect.



## Справочник:
 1. Redux - однонаправленный поток данных в нашем приложении. 
 Случилось действие от юзера - полетел экшен, экшен был пойман редьюсером - изменились пропсы у React-компонента -> компонент перерисовался.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
\

