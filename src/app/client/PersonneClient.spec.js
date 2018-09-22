const personneClient = require('./PersonneClient');
const nock = require('nock');
var assert = require('assert');

describe('test integration', function () {
    nock('http://www.mocky.io/v2')
        .get('/5b9187483100002700939a15')
        .reply(200, [{"prenom": "amine","age": 23}]);

    it('', done => {
        personneClient.getPersonnes()
                      .then(personnes => assert.deepEqual(personnes, [{"prenom": "amine","age": 23}]))
                      .catch(error => console.error('unexpected error ' + error))
                      .finally(done);

    })
})