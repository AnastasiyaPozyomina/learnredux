# Изучение Redux

1. Установка create-react-app (CRA).
2. Установка пакетов redux react-redux.
3. Настройка точки входа для redux-приложения (src/index.js), в которой обернули все в Provider. Так же вынесли для будущего удобства настройку store в отдельный файл.
https://react-redux.js.org/introduction/quick-start

4. Создан "корневой редьюсер" (rootReducer) (src/reducers/index.js). Корневой редьюсер - это и есть представление всего нашего состояния приложения (то есть, всего нашего store).
5. Связывание данных из store с компонентами приложения. "Вытаскиваем" данные из стора в компонент, с помощью connect.
6. Комбинирование редьюсеров.
7. Установка пакета prop-types (Проверка типа во время выполнения для свойств React и подобных объектов).
8. Добавление файла container c умным компонентом (Container)  (src/container/App.js). Файл App.js - это контейнер (так как подключен к redux).
9. Добавлены глупые компоненты (Presentational) (src/components/page.js && src/components/user.js).
10. Обновление Redux-приложения правильно: диспатчить экшен и реагировать на экшен в редьюсере.
11. Превратили строковое значение в константу и познакомились с данным подходом организации типов экшен.
12. Установка пакета redux-logger (на каждый клик, логгер пишет(что было(prev state), что случилось (action), что стало (next state))
LogRocket - это производственный инструмент для ведения журнала Redux, который позволяет воспроизводить проблемы, как если бы они произошли в вашем собственном браузере.  LogRocket позволяет воспроизводить действия Redux + состояние, сетевые запросы, журналы консоли и просматривать видео того, что видел пользователь.
13. Установка redux-thunk (есть доступный метод dispatch и getState).
14. Асинхронные actions
15. Взаимодействие с VK API



## Справочник:
 1. Redux - однонаправленный поток данных в нашем приложении. 
 Случилось действие от юзера - полетел экшен, экшен был пойман редьюсером - изменились пропсы у React-компонента -> компонент перерисовался.
 2. Однонаправленный поток данных:
    1. Приложение получило начальное состояние (initial state).
    2. Пользователь нажав кнопку, отправил действие (dispatch action).
    3. Соответсвующий редьюсер обновил часть приложения, в согласии с тем, что узнал от действия. 
  Приложение изменилось и теперь отражает новое состояние.
    4. (все повторяется по кругу, с пункта 2
3. 
Усилители, это middleware. Суть middleware функций, взять входные данные, добавить что-то и передать дальше. (redux-logger, redux-thunk)
4. 
Cинхронное действие:
- Пользователь кликнул на кнопку
- dispatch action {type: ТИП_ДЕЙСТВИЯ, payload: доп.данные}
- интерфейс обновился
Aсинхронное действие:
- Пользователь кликнул на кнопку
- dispatch action {type: ТИП_ДЕЙСТВИЯ_ЗАПРОС}
- запрос выполнился успешно
- dispatch action {type: ТИП_ДЕЙСТВИЯ_УСПЕШНО, payload: доп.данные}
- запрос выполнился неудачно
- dispatch action {type: ТИП_ДЕЙСТВИЯ_НЕУДАЧНО, error: true, payload: доп.данные ошибки

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
\

