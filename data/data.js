const { faker } = require('@faker-js/faker');

function createRandomData(framework) {
    return {
        "framework": framework,
        _id: faker.string.uuid(),
        avatar: faker.image.avatar(),
        birthday: faker.date.birthdate(),
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        sex: faker.person.sexType(),
        subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
        attribute: faker.lorem.words(100)
    };
}

module.exports = {
   createRandomData
}