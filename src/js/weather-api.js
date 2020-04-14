const WeatherAPI = (() => {
  const apiKey = '67a1de75c70034e312753131c19bba85';

  const getData = (city, callback, units = 'metric') => {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`)
    .then(resolve => resolve.json())
      .then(data => callback(data))
        .catch(error => error);
  }

  return {getData}
})();

export default WeatherAPI;