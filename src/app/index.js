const personneService = require('./services/PersonneService');

export class Pers {

}
personneService.getExperiencedPersonnes()
               .then(personnes => console.table(personnes));
