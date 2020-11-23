import React from 'react';
import PropTypes from 'prop-types';

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText;
    this.props.getPhotos (year); // setYear -> getPhotos
  };
  renderTemplate = () => {
    const {photos, isFetching, error} = this.props;

    if (error) {
      return <p className="error">Во время загрузки фото произошла ошибка</p>;
    }

    if (isFetching) {
      return <p>Загрузка...</p>;
    } else {
      return photos.map (entry => (
        <div key={entry.id} className="photo">
          <li>
            <img src={entry.sizes[0].url} alt="" />
          </li>
          <p>{entry.likes.count} ❤</p>
        </div>
      ));
    }
  };

  render () {
    const {year, photos} = this.props;
    return (
      <div className="ib page">
        <p>
          <button className="btn" onClick={this.onBtnClick}>
            2020
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2019
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2018
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2017
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2016
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2015
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2014
          </button> {' '}
          <button className="btn" onClick={this.onBtnClick}>
            2013
          </button> {' '}
          <button className="btn" onClick={this.onBtnClick}>
            2012
          </button> {' '}
          <button className="btn" onClick={this.onBtnClick}>
            2011
          </button> {' '}
          <button className="btn" onClick={this.onBtnClick}>
            2010
          </button> {' '}
        </p>
        <h3>
          {year} год [{photos.length}]
        </h3>
        <ul className="photoes">
          {this.renderTemplate ()}
        </ul>

      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
};
