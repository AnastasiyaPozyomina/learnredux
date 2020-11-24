import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Page} from '../components/page';
import {User} from '../components/user';
import {getPhotos} from '../actions/PageActions';
import {handleLogin} from '../actions/UserActions';
import './App.css';

class App extends Component {
  render () {
    const {user, page, getPhotosAction, handleLoginAction} = this.props;
    return (
      <div className="App container">
        <div className="row">

          <User
            name={user.name}
            isFetching={user.isFetching}
            error={user.error}
            handleLogin={handleLoginAction}
          />
        </div>
        <div className="row">
          <div className="col">
            <header className="App-header">
              <h1 className="App-title">Фотографии VK</h1>
            </header>

            <Page
              photos={page.photos}
              year={page.year}
              isFetching={page.isFetching}
              getPhotos={getPhotosAction}
            />

          </div>
        </div>
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

// mapDispatchToPropsт-  функция, первым аргументом получает dispatch, а значит  можем теперь "диспатчить" экшены,
// которые будут пойманы редьюсером. Только те экшены, которые были отправлены с помощью "диспетчера" будут пойманы редьюсером.
// Затем внутри mapDispatchToProps вернули объект, который в итоге приклеится в this.props (так же, как и было в mapStateToProps).
// В "приклееном объекте" создаем функцию setYearAction [1], суть которой сводится к следующему: "диспатчни" импортированный выше setYear с переданным годом.

const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch (getPhotos (year)),
    handleLoginAction: () => dispatch (handleLogin ()),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (App);

//connect помогает нам получить в качестве props для компонента <App /> данные из store
// Назначение функции connect вытекает из названия: подключи React компонент к Redux store.
// Результат работы функции connect - новый присоединенный компонент, который оборачивает переданный компонент.
