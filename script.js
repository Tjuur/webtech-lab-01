//General scripts for my page

//list of recommendations
const recommendations = [
    {
        song: "Talk of the Town",
        artist: "Fred again...",
        genre: "Electronic",
        favorite: false
    },
    {
        song: "Sonne",
        artist: "Rammstein",
        genre: "Metal",
        favorite: false
    },
    {
        song: "4:00A.M.",
        artist: "Taeko Onuki",
        genre: "Pop",
        favorite: false
    },
    {
        song: "Bandidos Rurales",
        artist: "León Gieco",
        genre: "Other",
        favorite: false
    },
    {
        song: "Redemption",
        artist: "Pentakill",
        genre: "Metal",
        favorite: false
    },
    {
        song: "Cotton Fields",
        artist: "Creedence Clearwater Revival",
        genre: "Country",
        favorite: false
    }
];


//Functions to make said recommendations appear

const recommendationList =
    document.querySelector("#recommendationList");


//Updates the favorite button depending on favorite status
function updateFavoriteButton(button, recommendation) {
    button.textContent =
        recommendation.favorite ? "★" : "☆";

    button.setAttribute(
        "aria-pressed",
        recommendation.favorite ? "true" : "false"
    );

    button.setAttribute(
        "aria-label",
        recommendation.favorite
            ? "Remove from favorites"
            : "Mark as favorite"
    );
}


function createRecommendation(recommendation) {
    const article = document.createElement("article");
    article.dataset.song = recommendation.song;

    const song = document.createElement("h3");
    song.textContent = recommendation.song;

    const favoriteButton = document.createElement("button");
    favoriteButton.type = "button";
    favoriteButton.classList.add("favoriteButton");

    updateFavoriteButton(favoriteButton, recommendation);

    const headingRow = document.createElement("div");
    headingRow.classList.add("recommendationHeading");

    headingRow.append(song, favoriteButton);

    const artist = document.createElement("p");
    artist.textContent = "Artist: " + recommendation.artist;

    const genre = document.createElement("p");
    genre.textContent = "Genre: " + recommendation.genre;

    article.append(headingRow, artist, genre);

    return article;
}

recommendationList.addEventListener("click", function (event) {
    if (event.target.classList.contains("favoriteButton")) {
        const button = event.target;
        const article = button.closest("article");

        const recommendation = recommendations.find(
            function (item) {
                return item.song === article.dataset.song;
            }
        );

        recommendation.favorite = !recommendation.favorite;

        updateFavoriteButton(button, recommendation);
    }
});


//Filter section
const recommendationFilter =
    document.querySelector("#recommendationFilter");

function renderRecommendations(items) {
    recommendationList.textContent = "";

    if (items.length === 0) {
        const message = document.createElement("p");
        message.textContent =
            "No recommendations matching your filter.";

        recommendationList.append(message);
        return;
    }

    items.forEach(function (recommendation) {
        const item = createRecommendation(recommendation);
        recommendationList.append(item);
    });
}
function applyRecommendationFilter() {
    const searchText =
        recommendationFilter.value.toLowerCase();

    const filteredRecommendations = recommendations.filter(
        function (recommendation) {
            return (
                recommendation.song.toLowerCase().includes(searchText) ||
                recommendation.artist.toLowerCase().includes(searchText) ||
                recommendation.genre.toLowerCase().includes(searchText)
            );
        }
    );

    renderRecommendations(filteredRecommendations);
}

renderRecommendations(recommendations);

recommendationFilter.addEventListener("input", function () {
    applyRecommendationFilter();
});


//Adding new recommendations or whatever

const recommendationForm =
    document.querySelector("#recommendationForm");

const recommendationName =
    document.querySelector("#recommendationName");

const recommendationArtistName =
    document.querySelector("#recommendationArtistName");

const recommendationGenre =
    document.querySelector("#recommendationGenre");

const recommendationNameError =
    document.querySelector("#recommendationNameError");

const recommendationArtistError =
    document.querySelector("#recommendationArtistError");

const recommendationGenreError =
    document.querySelector("#recommendationGenreError");


//Removes recommendation errors once fixed
recommendationName.addEventListener("input", function () {
    if (recommendationName.value.trim() !== "") {
        recommendationNameError.textContent = "";
    }
});

recommendationArtistName.addEventListener("input", function () {
    if (recommendationArtistName.value.trim() !== "") {
        recommendationArtistError.textContent = "";
    }
});

recommendationGenre.addEventListener("change", function () {
    if (recommendationGenre.value !== "") {
        recommendationGenreError.textContent = "";
    }
});


recommendationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let formIsValid = true;

    recommendationNameError.textContent = "";
    recommendationArtistError.textContent = "";
    recommendationGenreError.textContent = "";

    if (recommendationName.value.trim() === "") {
        recommendationNameError.textContent =
            "Please enter a song name.";
        formIsValid = false;
    }

    if (recommendationArtistName.value.trim() === "") {
        recommendationArtistError.textContent =
            "Please enter an artist name.";
        formIsValid = false;
    }

    if (recommendationGenre.value === "") {
        recommendationGenreError.textContent =
            "Please select a genre.";
        formIsValid = false;
    }

    if (!formIsValid) {
        return;
    }

    const newRecommendation = {
        song: recommendationName.value,
        artist: recommendationArtistName.value,
        genre: recommendationGenre.value,
        favorite: false
    };

    recommendations.push(newRecommendation);

    applyRecommendationFilter();

    recommendationForm.reset();
});


//Contact form

const contactForm =
    document.querySelector("#contactForm");

const contactName =
    document.querySelector("#contactName");

const contactEmail =
    document.querySelector("#contactEmail");

const contactMessage =
    document.querySelector("#contactMessage");

const nameError =
    document.querySelector("#nameError");

const emailError =
    document.querySelector("#emailError");

const messageError =
    document.querySelector("#messageError");

const contactSuccess =
    document.querySelector("#contactSuccess");


contactName.addEventListener("input", function () {
    if (contactName.value.trim() !== "") {
        nameError.textContent = "";
    }
});

contactEmail.addEventListener("input", function () {
    if (
        contactEmail.value.trim() !== "" &&
        contactEmail.value.includes("@") &&
        contactEmail.value.includes(".")
    ) {
        emailError.textContent = "";
    }
});

contactMessage.addEventListener("input", function () {
    if (contactMessage.value.trim() !== "") {
        messageError.textContent = "";
    }
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let formIsValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    contactSuccess.textContent = "";

    if (contactName.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        formIsValid = false;
    }

    if (contactEmail.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        formIsValid = false;
    } else if (
        !contactEmail.value.includes("@") ||
        !contactEmail.value.includes(".")
    ) {
        emailError.textContent =
            "Please enter a valid email. (must contain '@' and '.' )";
        formIsValid = false;
    }

    if (contactMessage.value.trim() === "") {
        messageError.textContent = "Please enter a message.";
        formIsValid = false;
    }

    if (formIsValid) {
        contactSuccess.textContent = "Your message has been sent!";

        contactForm.reset();
    }
});


//Toggle button, PSA this did NOT take 2 hrs...
const themeToggle =
    document.querySelector("#themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("lightMode");

    const isLight =
        document.body.classList.contains("lightMode");

    themeToggle.setAttribute(
        "aria-pressed",
        isLight ? "true" : "false"
    );

    themeToggle.textContent =
        isLight ? "Dark mode" : "Light mode";
});