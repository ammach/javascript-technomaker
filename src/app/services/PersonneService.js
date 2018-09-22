const personneClient = require('./../client/PersonneClient');

const getExperiencedPersonnes = () => {
    return personneClient.getPersonnes()
                         .then(personnes => filterPersonnes(personnes));
}

const filterPersonnes = (personnes) => personnes.filter(personne => personne.age >= 26);

module.exports = {
    getExperiencedPersonnes
}