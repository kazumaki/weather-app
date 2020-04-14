const getData = (city, units = 'metric') => {
  const apiKey = '67a1de75c70034e312753131c19bba85';
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`)
    .then(resolve => resolve.json())
    .then(getResult)
    .catch(getError);
}

const getResolve = (resolve) => {
  return resolve.json();
}

const getResult = (data) => {
  console.log(data);
  const cityContainer = document.querySelector('.city-info');
  cityContainer.innerHTML =
    `
    <p> City Name: ${data.name} </p>
    <p> Weather Desc: ${data.weather[0].description} </p>
    <p> Temp: °C ${Math.round(Number(data.main.temp))} <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"> </p>
    `;
}

const getError = (error) => {
  console.log(error);
}

const searchSubmit = (event) => {
  event.preventDefault();
  const city = document.querySelector('#city-name').value;
  getData(city);
}

window.onload = () => {
  const searchButton = document.querySelector('#submit-button');
  searchButton.addEventListener('click', searchSubmit)
}