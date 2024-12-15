# Week3-code-challenge

This code challenge focuses on Flatdango which is a simple web application that allows users to purchase movie tickets from the Flatiron Movie Theater. Users can view movie details, including the poster, title, runtime, showtime, and available tickets. The application fetches data from a local JSON server and provides an interactive experience for buying tickets.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- View details of the first movie upon loading the page.
- See a list of all available movies on the left side of the page.
- Buy tickets for a movie, with the number of available tickets updating in real-time.
- Prevent ticket purchases if the showing is sold out.

## Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API
- JSON Server (for local data)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   
   ```bash
   git clone git@github.com:odhiambootieno/week3-code-challenge.git
   cd flatdango

2. **Set up JSON Server:**

    Install JSON Server globally if you haven't already

  ```bash
npm install -g json-server
  ```
    Create a db.json file in the project root and copy the provided JSON data into it.

3. **Start the JSON Server:**

  ```bash
json-server --watch db.json
  ```
     This will start the server at http://localhost:3000.

4. **Open the application:**

     - open index.html in your web browser


## Usage

1. Upon loading the application, the details of the first movie will be    displayed.
2. Click on any movie title in the list to view its details.

3. Click the "Buy Ticket" button to purchase a ticket. The available tickets will decrease accordingly.

4. If there are no tickets available, the button will be disabled.

## API Endpoints

1. GET /films: Retrieve a list of all films.
2. GET /films/:id: Retrieve details of a specific film by ID.


## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please fork the repository and submit a pull request.

## Licence

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

Gmail (mail to brianmkcnight@gmail.com )






