import {createStore} from 'redux';
import {rootReducer} from '../reducers';

export const store = createStore (rootReducer);




// удалили "начальное состояние = initial state"
// так как теперь наш редьюсер составной,
// и нам нужны initialState каждого редьюсера.
// Это будет сделано автоматически



//сигнатура функции createStore:
//первый аргумент - функция-обработчик изменений (редьюсер)
//второй аргумент - начальное состояние
