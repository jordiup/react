const googleDatabase = [
    'cats.com',
    'catpictures.com',
    'animals.com',
    'myfavouritecats.com',
    'souprecipes.com',
    'freshjeans.net',
]; 

const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
        return website.includes(searchInput);
    });
    return matches.length > 3 ? matches.slice(0,3) : matches;
}

// Uncomment this line to log our search function from above
// console.log(googleSearch('cat', googleDatabase));

module.exports = googleSearch; 