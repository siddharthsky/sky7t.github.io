// script.js
function searchMovie() {
    var searchTerm = document.getElementById("searchInput").value;
    var apiUrl = 'https://www.omdbapi.com/?apikey=YOUR_API_KEY&t=' + encodeURIComponent(searchTerm);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayMovie(data);
        })
        .catch(error => console.error('Error:', error));
}

function displayMovie(movieData) {
    var movieResultsDiv = document.getElementById("movieResults");
    if (movieData.Response === "False") {
        movieResultsDiv.innerHTML = "<p>No results found.</p>";
    } else {
        var movieHtml = `
            <h2>${movieData.Title}</h2>
            <p><strong>Year:</strong> ${movieData.Year}</p>
            <p><strong>IMDb Rating:</strong> ${movieData.imdbRating}</p>
            <p><strong>Plot:</strong> ${movieData.Plot}</p>
            <img src="${movieData.Poster}" alt="${movieData.Title} Poster">
        `;
        movieResultsDiv.innerHTML = movieHtml;
    }
}
