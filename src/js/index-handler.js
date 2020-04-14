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
  const getHumidtyElement = () => document.querySelector('.humidity');
  const getWindElement = () => document.querySelector('.wind');

  const receiveWeatherData = (data) => {
    console.log(data);
    data.cod == 200 ? setWeatherData(data) : showWeatherDataError(data);
    getLoader().classList.add('hide');
  }

  const receiveWeatherDataError = (error) => {
    console.log(error);
    getLoader().classList.add('hide');
  }
  
  const setWeatherData = (data) => {
    
  }

  const showWeatherDataError = (data) => {
    getErrorMessage().classList.remove('hide');
    getErrorMessage().innerHTML = data.message[0].toUpperCase() + data.message.slice(1);
  }

  const searchSubmit = (event) => {
    event.preventDefault();
    getLoader().classList.remove('hide');
    getErrorMessage().classList.add('hide');
    WeatherAPI.getData(getFormCityName(), receiveWeatherData, receiveWeatherDataError)
  }

  const initialize = () => {
    getSearchButton().addEventListener('click', searchSubmit);
  }

  return {initialize}
})();

export default IndexHandler;