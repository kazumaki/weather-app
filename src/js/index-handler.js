const IndexHandler = (() => {
  const getLoader = () => document.querySelector('#loader');
  const getCityName = () => document.querySelector('#city-name').value;
  const getSearchButton = () => document.querySelector('#search-button');

  const initialize = () => {
    
  }

  return {getLoader, getCityName}
})();

export default IndexHandler;