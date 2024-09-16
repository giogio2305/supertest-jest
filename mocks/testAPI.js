const nock = require('nock')

const scope = nock('http://api.test.com');

const MockServer = () => {
    // get all the testers
    scope.get("/tester").reply(200, {name: 'Georges Alfred', company: 'Maviance'});
    // get all the testers
    scope.get(`/tester/1`).reply(200, {name: 'Abongwa Bonalais', company: 'Maviance'});
}

module.exports = MockServer;