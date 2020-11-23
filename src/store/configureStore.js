import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store = createStore (rootReducer, applyMiddleware( thunk, logger));

// удалили "начальное состояние = initial state"
// так как теперь наш редьюсер составной,
// и нам нужны initialState каждого редьюсера.
// Это будет сделано автоматически

//сигнатура функции createStore:
//первый аргумент - функция-обработчик изменений (редьюсер)
//второй аргумент - начальное состояние
