// scripts/generateFakeData.js
const { faker } = require('@faker-js/faker');

const generateFakeUser = () => {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country(),
    };
};

// Generate fake data for checkout
const generateCheckoutData = () => {
    const user = generateFakeUser();
    console.log('Generated User Data:', user);
    return user;
};

// Export the function for use in your test scripts
module.exports = { generateCheckoutData };

// Optionally, run this script directly to generate fake data
if (require.main === module) {
    generateCheckoutData();
}