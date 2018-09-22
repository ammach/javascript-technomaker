const personneService = require('./PersonneService');
const personneClient = require('./../client/PersonneClient');
const sinon = require('sinon');

describe('test unitaire', function () {
    it('', function () {
        const personnes = [
            {
                'prenom': 'amine',
                'age': 23
            }
        ];
        sinon.stub(personneClient, 'getPersonnes').returns(Promise.resolve(personnes));

        personneService.getExperiencedPersonnes();
    });

});