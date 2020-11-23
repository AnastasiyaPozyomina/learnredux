import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAIL,
} from '../actions/PageActions'

const initialState = {
  year: 2018,
  photos: [],
  isFetching: false, // изначально статус загрузки - ложь
  // так как он станет true, когда запрос начнет выполнение
  error:'',
};

export function pageReducer (state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return {...state, year: action.payload, isFetching: true};

    case GET_PHOTOS_SUCCESS:
      return {...state, photos: action.payload, isFetching: false};

   case GET_PHOTOS_FAIL:
      return { ...state, error: action.payload.message, isFetching: false }

    default:
      return state;
  }
}

//В функции pageReducer указан второй аргумент - action.
// Это стандартные аргументы redux reducer'а.
// Благодаря этому, мы можем обрабатывать различные действия по их типу, попадая в нужную секцию case оператора switch.

//Так же мы не изменили объект state, а вернули новый с полем year равным action.payload (а значит годом, выбранным пользователем, который был послан в action.payload).
