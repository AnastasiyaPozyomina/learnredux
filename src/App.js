import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  render () {
    const {name, surname, age} = this.props.user;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <p>
          Привет из App, {name} {surname}!
        </p>
        <p>Тебе уже {age} ?</p>
      </div>
    );
  }
}

// приклеиваем данные из store
const mapStateToProps = store => {
  console.log (store); // посмотрим, что же у нас в store?
  return {
    user: store.user,
  };
};

export default connect (mapStateToProps) (App);

//connect помогает нам получить в качестве props для компонента <App /> данные из store
// Назначение функции connect вытекает из названия: подключи React компонент к Redux store.
// Результат работы функции connect - новый присоединенный компонент, который оборачивает переданный компонент.
