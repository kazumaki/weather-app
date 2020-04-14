const getData = () => {
  const apiKey = '67a1de75c70034e312753131c19bba85';
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`)
    .then(getResolve)
    .then(getResult);
}

const getResolve = (resolve) => {
  return resolve.json();
}

const getResult = (result) => {
  console.log(result);
}

getData();