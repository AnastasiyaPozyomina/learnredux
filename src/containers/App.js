import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {Page} from '../components/page';
import {User} from '../components/user';

class App extends Component {
  render () {
    const {user, page} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <User name={user.name} />
        <Page photos={page.photos} year={page.year} />
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
