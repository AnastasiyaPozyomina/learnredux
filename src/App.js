import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  render () {
    const {user, page} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <p>
    Привет, {user.name}!
        </p>
        <p>
          У тебя {page.photos.length} фото за {page.year} год
        </p>
      </div>
    );
  }
}

// приклеиваем данные из store
const mapStateToProps = store => {
  console.log (store); // посмотрим, что же у нас в store?
  return {
    user: store.user,
    page: store.page,
//  В данной функции, мы хотим отрезать от нашего общего пирога (Store) только те кусочки (редьюсеры), которые нам нужны.
//  Мы приклеиваем в props компонента, данные из тех редьюсеров, которые нам требуются.
//  Мы не только получаем в this.props.XXX данные, которым нам нужны, но мы еще и подписываемся на изменение этих данных.
  };
};



export default connect (mapStateToProps) (App);

//connect помогает нам получить в качестве props для компонента <App /> данные из store
// Назначение функции connect вытекает из названия: подключи React компонент к Redux store.
// Результат работы функции connect - новый присоединенный компонент, который оборачивает переданный компонент.
