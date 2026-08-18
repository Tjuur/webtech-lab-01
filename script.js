//General scripts for my page

//list of recommendations
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

//Functions to make said recommendations appear
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

//Filter for the recommendations
const recommendationFilter = 
    document.querySelector("#recommendationFilter");

function renderRecommendations(items) {
    recommendationList.textContent = "";
    
    if (items.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No recommendations matching your filter.";
    recommendationList.append(message);
    return;
    }

    items.forEach(function (recommendation) { 
        const item = createRecommendation(recommendation);
        recommendationList.append(item);
    });
}

renderRecommendations(recommendations);

recommendationFilter.addEventListener("input", function (){
    const searchText = recommendationFilter.value.toLocaleLowerCase();

    const filteredRecommendations = recommendations.filter(
        function (recommendation) {
            return(
                recommendation.song.toLocaleLowerCase().includes(searchText) ||
                recommendation.artist.toLocaleLowerCase().includes(searchText) ||
                recommendation.genre.toLocaleLowerCase().includes(searchText)                
            );
        }
    );

    renderRecommendations(filteredRecommendations);
});
