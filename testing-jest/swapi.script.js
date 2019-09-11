const fetch = require('node-fetch');

const getPeople = fetch => {
    return fetch('https://swapi.co/api/people')
        .then(response => response.json())
        .then(data => {
            return {
                count: data.count,
                results: data.results
            }
        })
}

// getPeople(fetch)

module.exports = getPeople;