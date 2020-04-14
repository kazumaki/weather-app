import WeatherAPI from './weather-api';

const IndexHandler = (() => {
  const getLoader = () => document.querySelector('#loader');
  const getFormCityName = () => document.querySelector('#city-name').value;
  const getErrorMessage = () => document.querySelector('#error-message');
  const getSearchButton = () => document.querySelector('#submit-button');
  const getCityNameElement = () => document.querySelector('.city-name');
  const getWeatherIconElement = () => document.querySelector('#weather-icon');
  const getTemperatureElement = () => document.querySelector('.temperature-value');
  const getPressureElement = () => document.querySelector('.pressure');
  const getHumidityElement = () => document.querySelector('.humidity');
  const getWindElement = () => document.querySelector('.wind');

  const getTemperatureTypeSelected = () => {
    if (document.querySelector('#celsius').checked) {
      return 'metric';
    }

    return 'imperial';
  };

  const setWeatherData = (data) => {
    getCityNameElement().innerHTML = data.name;
    getWeatherIconElement().classList = '';
    getWeatherIconElement().classList.add('owf', 'owf-5x', `owf-${data.weather[0].id}`);
    getTemperatureElement().innerHTML = getTemperatureTypeSelected() === 'metric' ? `${Math.round(data.main.temp)} °C` : `${Math.round(data.main.temp)} °F`;
    getPressureElement().innerHTML = `Pressure: ${data.main.pressure}hPa`;
    getHumidityElement().innerHTML = `Humidity: ${data.main.humidity}%`;
    getWindElement().innerHTML = getTemperatureTypeSelected() === 'metric' ? `Humidity: ${data.wind.speed}meters/s` : `Humidity: ${data.wind.speed}miles/h`;
    getLoader().classList.add('hide');
  };

  const showWeatherDataError = (data) => {
    getErrorMessage().classList.remove('hide');
    getErrorMessage().innerHTML = data.message[0].toUpperCase() + data.message.slice(1);
  };

  const receiveWeatherData = (data) => {
    if (data.cod === 200) {
      return setWeatherData(data);
    }
    return showWeatherDataError(data);
  };

  const receiveWeatherDataError = () => {
    getLoader().classList.add('hide');
  };

  const searchSubmit = (event) => {
    event.preventDefault();
    getLoader().classList.remove('hide');
    getErrorMessage().classList.add('hide');
    WeatherAPI.getData(
        getFormCityName(),
        receiveWeatherData,
        receiveWeatherDataError,
        getTemperatureTypeSelected()
      );
  }

  const initialize = () => {
    getSearchButton().addEventListener('click', searchSubmit);
    getCityNameElement().innerHTML = '';
    getWeatherIconElement().classList = "";
    getTemperatureElement().innerHTML = '';
    getPressureElement().innerHTML = '';
    getHumidityElement().innerHTML = '';
    getWindElement().innerHTML = '';
    getLoader().classList.add('hide');
  }

  return {initialize}
})();

export default IndexHandler;