import {createStore} from 'redux';
import {rootReducer, initialState} from '../reducers';

export const store = createStore (rootReducer, initialState);

//сигнатура функции createStore:
//первый аргумент - функция-обработчик изменений (редьюсер)
//второй аргумент - начальное состояние
