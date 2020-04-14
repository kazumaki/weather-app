const getData = (city) => {
  const apiKey = '67a1de75c70034e312753131c19bba85';
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(resolve => resolve.json())
    .then(getResult);
}

const getResolve = (resolve) => {
  return resolve.json();
}

const getResult = (data) => {
  console.log(data)
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