// General scripts for my page

// List of recommendations
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


// Music recommendations

const recommendationList =
    document.querySelector("#recommendationList");

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

        const recommendation = recommendations.find(function (item) {
            return item.song === article.dataset.song;
        });

        recommendation.favorite = !recommendation.favorite;

        updateFavoriteButton(button, recommendation);
    }
});


// Filter recommendations

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


// Add new recommendations

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


// Contact form

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
        nameError.textContent = "";
        emailError.textContent =
            "Please enter your email.";
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


// Light/dark mode

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

// Wheelhouse API integration — Lab 10

const WHEELHOUSE_API_URL = "http://localhost:3000/api/v1/services";

const servicesStatus = document.querySelector("#servicesStatus");
const servicesTable = document.querySelector("#servicesTable");
const servicesBody = document.querySelector("#servicesBody");

const serviceLookupForm = document.querySelector("#serviceLookupForm");
const serviceIdInput = document.querySelector("#serviceId");
const serviceLookupStatus = document.querySelector("#serviceLookupStatus");
const serviceLookupResult = document.querySelector("#serviceLookupResult");

const wheelhouseCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

function formatServicePrice(price) {
    return wheelhouseCurrency.format(Number(price));
}

async function fetchWheelhouseJSON(url) {
    const response = await fetch(url);

    let data;

    try {
        data = await response.json();
    } catch {
        throw new Error("The API returned an unreadable response.");
    }

    if (!response.ok) {
        if (data && Array.isArray(data.errors)) {
            throw new Error(data.errors.join(", "));
        }

        throw new Error(`API request failed (${response.status}).`);
    }

    return data;
}

function createServiceRow(service) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = service.name;

    const priceCell = document.createElement("td");
    priceCell.textContent = formatServicePrice(service.price);

    row.append(nameCell, priceCell);

    return row;
}

async function loadWheelhouseServices() {
    servicesStatus.textContent = "Loading services...";
    servicesTable.hidden = true;
    servicesBody.textContent = "";

    try {
        const services = await fetchWheelhouseJSON(WHEELHOUSE_API_URL);

        if (!Array.isArray(services)) {
            throw new Error("The API returned an unexpected service list.");
        }

        services.forEach(function (service) {
            servicesBody.append(createServiceRow(service));
        });

        if (services.length === 0) {
            servicesStatus.textContent = "No services are currently available.";
            return;
        }

        servicesTable.hidden = false;
        servicesStatus.textContent = "";
    } catch (error) {
        servicesStatus.textContent =
            `Unable to load services: ${error.message}`;
    }
}

serviceLookupForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const serviceId = serviceIdInput.value.trim();

    serviceLookupStatus.textContent = "Looking up service...";
    serviceLookupResult.textContent = "";

    try {
        const service = await fetchWheelhouseJSON(
            `${WHEELHOUSE_API_URL}/${encodeURIComponent(serviceId)}`
        );

        const heading = document.createElement("h4");
        heading.textContent = service.name;

        const price = document.createElement("p");
        price.textContent =
            `Price: ${formatServicePrice(service.price)}`;

        const repairCount = document.createElement("p");
        repairCount.textContent =
            `Number of repairs using this service: ${service.repair_count}`;

        serviceLookupResult.append(heading, price, repairCount);

        serviceLookupStatus.textContent = "";
    } catch (error) {
        serviceLookupStatus.textContent =
            `Unable to find service: ${error.message}`;
    }
});

loadWheelhouseServices();