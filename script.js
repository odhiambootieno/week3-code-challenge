document.addEventListener("DOMContentLoaded", () => {
    const filmDetails = document.getElementById("film-details");
    const filmTitle = document.getElementById("film-title");
    const filmPoster = document.getElementById("film-poster");
    const filmRuntime = document.getElementById("film-runtime");
    const filmShowtime = document.getElementById("film-showtime");
    const filmAvailableTickets = document.getElementById("film-available-tickets");
    const buyTicketButton = document.getElementById("buy-ticket");
    const filmsList = document.getElementById("films");

    // Fetch all films
    fetch("http://localhost:3000/films")
        .then(response => response.json())
        .then(films => {
            // Populate the films list
            films.forEach(film => {
                const li = document.createElement("li");
                li.className = "film-item";
                li.textContent = film.title;
                li.dataset.id = film.id; // Store the film ID
                filmsList.appendChild(li);
            });
     fetch('https://my-json-server.typicode.com/odhiambootieno/week3-code-challenge/db', {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            }) 

            // Load the first film's details
            loadFilmDetails(films[0]);
        });

    // Load film details based on the selected film
    filmsList.addEventListener("click", (event) => {
        if (event.target.classList.contains("film-item")) {
            const filmId = event.target.dataset.id;
            fetch(`http://localhost:3000/films/${filmId}`)
                .then(response => response.json())
                .then(film => loadFilmDetails(film));
        }
    });

    // Load film details into the UI
    function loadFilmDetails(film) {
        filmTitle.textContent = film.title;
        filmPoster.src = film.poster;
        filmRuntime.textContent = `Runtime: ${film.runtime} minutes`;
        filmShowtime.textContent = `Showtime: ${film.showtime}`;
        const availableTickets = film.capacity - film.tickets_sold;
        filmAvailableTickets.textContent = `Available Tickets: ${availableTickets}`;
        buyTicketButton.disabled = availableTickets <= 0; // Disable button if sold out
    }

    // Handle ticket purchase
    buyTicketButton.addEventListener("click", () => {
        const availableTicketsText = filmAvailableTickets.textContent;
        const availableTickets = parseInt(availableTicketsText.split(": ")[1]);

        if (availableTickets > 0) {
            // Update the available tickets
            filmAvailableTickets.textContent = `Available Tickets: ${availableTickets - 1}`;
            // Optionally, you can also disable the button if sold out
            if (availableTickets - 1 === 0) {
                buyTicketButton.disabled = true;
                alert("This showing is now sold out!");
            }
        } else {
            alert("Sorry, this movie is sold out!");
        }
    });
});
