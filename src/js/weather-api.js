const WeatherAPI = (() => {
  const apiKey = '67a1de75c70034e312753131c19bba85';

  const getData = (city, successCallback, errorCallback, units = 'metric') => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`, {
      mode: 'cors'
    })
    .then(resolve => resolve.json())
      .then(data => successCallback(data))
        .catch(error => errorCallback(error));
  }

  return {getData}
})();

export default WeatherAPI;