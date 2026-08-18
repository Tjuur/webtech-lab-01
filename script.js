//General scripts for my page

const recommendations = [
    {
        song:"Talk of the Town",
        artist: "Fred again...",
        genre: "Electronic"
    },
    {
        song: "Sonne",
        artist: "Rammstein",
        genre: "Metal"
    },
    {
        song: "4:00A.M.",
        artist: "Taeko Onuki",
        genre: "Pop"
    },
    {
        song: "Bandidos Rurales",
        artist: "León Gieco",
        genre: "Other"
    },
    {
        song: "Redemption",
        artist: "Pentakill",
        genre: "Metal"
    },
    {
        song: "Cotton Fields",
        artist: "Creedence Clearwater Revival",
        genre: "Country"
    }
];

const recommendationList =
    document.querySelector("#recommendationList");

function createRecommendation(recommendation){
    const article = document.createElement("article");
    
    const song = document.createElement("h3");
    song.textContent = recommendation.song;

    const artist = document.createElement("p");
    artist.textContent = "Artist: " + recommendation.artist;

    const genre = document.createElement("p");
    genre.textContent = "Genre: " + recommendation.genre;

    article.append(song, artist, genre);

    return article;
}

recommendations.forEach(function (recommendation) {
    const item = createRecommendation(recommendation);
    recommendationList.append(item);
});