export function setYear (year) {
  return {
    type: 'SET_YEAR',
    payload: year,
  };
}

//  поле type - обязательное
// payload - "негласное" соглашение.
