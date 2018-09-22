const fetch = require('node-fetch');

const getPersonnes = () => {
    return fetch('http://www.mocky.io/v2/5b9187483100002700939a15')
        .then(res => res.json())
        .catch(error => console.log(error));
}


module.exports = {
    getPersonnes
}