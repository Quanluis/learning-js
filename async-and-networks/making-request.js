const axios = require('axios'); //common js modules
const url = 'https://jsonplaceholder.typicode.com/posts/45';

function printResponse (response){
console.log(response.data);
}
function abandonShip (error){
    console.log(error);
}
axios.get(url)
    .then(printResponse)
    .catch(abandonShip);
