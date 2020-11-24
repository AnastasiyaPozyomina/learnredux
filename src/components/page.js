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
        <div key={entry.id} className="photo card">
          <p className="img">
            <img src={entry.sizes[0].url} alt="" />
          </p>
          <div class="card-body">
            <p class="card-text">
              {entry.likes.count} ❤
            </p>
          </div>
        </div>
      ));
    }
  };

  render () {
    const {year, photos} = this.props;
    return (
      <div className="ib page">
        <p>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.onBtnClick}
          >
            2020
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.onBtnClick}
          >
            2019
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.onBtnClick}
          >
            2018
          </button>
          <button className="btn btn-success" onClick={this.onBtnClick}>
            2017
          </button>
          <button className="btn btn-success" onClick={this.onBtnClick}>
            2016
          </button>
          <button className="btn btn-success" onClick={this.onBtnClick}>
            2015
          </button>
          <button className="btn btn-success" onClick={this.onBtnClick}>
            2014
          </button>
          <button className="btn btn-success" onClick={this.onBtnClick}>
            2013
          </button>
          <button className="btn btn-success" onClick={this.onBtnClick}>
            2012
          </button>
          <button className="btn btn-success" onClick={this.onBtnClick}>
            2011
          </button>
          <button className="btn btn-success" onClick={this.onBtnClick}>
            2010
          </button>
        </p>
        <h3>
          {year} год{' '}
        </h3>
        <p>Количество фотографии: {photos.length}</p>
        <div className="photo-container">
          {this.renderTemplate ()}
        </div>

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
