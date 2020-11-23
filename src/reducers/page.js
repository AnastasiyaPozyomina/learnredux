const initialState = {
  year: 2018,
  photos: [],
};

export function pageReducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_YEAR':
      return {...state, year: action.payload};

    default:
      return state;
  }
}

//В функции pageReducer указан второй аргумент - action.
// Это стандартные аргументы redux reducer'а.
// Благодаря этому, мы можем обрабатывать различные действия по их типу, попадая в нужную секцию case оператора switch.

//Так же мы не изменили объект state, а вернули новый с полем year равным action.payload (а значит годом, выбранным пользователем, который был послан в action.payload).
