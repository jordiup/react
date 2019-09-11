// // // // // // // // 
//  GOOGLE SEARCH TEST
// // // // // // // // 

const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com',
    'web1.com',
    'web2.com',
    'web3.com',
    'web4.com'
];

// describe('googleSearch'){
    it('this is a blank test which will pass by default', () => {

    })

    it('is a silly test', () => {
        expect('hello').toBe('hello')
    })

    it('is searching google', () => {
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com','dogpictures.com'])
        expect(googleSearch('thiswontwork', dbMock)).toEqual([])
    })

    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([])
        expect(googleSearch(null, dbMock)).toEqual([])
    })

    it('does not return more than three matches', () => {
        expect(googleSearch('web', dbMock).length).toEqual(3);
    })
// }


// // // // // // // // 
//  ASYNC SWAPI TEST
// // // // // // // // 

const fetch = require('node-fetch');

const getPeople = require('./swapi.script');

it('calls swapi to get people', (done) => {
    expect.assertions(2);
    getPeople(fetch).then(data => {
        expect(data.count).toEqual(87)
        expect(data.results.length).toBeGreaterThan(5);
        done();
    })
})

// Useful cheatsheet
// https://github.com/sapegin/jest-cheat-sheet


// it('getPeople returns count and results', (done) => {
//     const mockFetch = jest.fn()
//         .mockReturnValue(Promise.resolve({
//             json: () => Promise.resolve({
//                 count: 89,
//                 results: [0,1,2,3,4,5]
//             })
//         }))

//     expect.assertions(2)    
//     return swapi.getPeople(mockFetch).then(data => {
//         expect(mockFetch.mock.calls.length).toBe(1);
//         expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
//         // done();
//     })
// })





