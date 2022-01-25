import getData from './get-data.js';

getData(1)
    .then(data => console.log(data))
    .catch(err => console.log(err));