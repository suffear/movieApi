const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 8080;

// Middleware to log requests
app.use(morgan('common'));

// Serve the documentation.html file from the public folder
app.use(express.static('public'));

// Express GET route for /movies
app.get('/movies', (req, res) => {
    // Replace with your top 10 movies data
    const topMovies = [
        {
            "title": "Inception",
            "year": 2010,
            "director": "Christopher Nolan",
            "genre": "Science Fiction",
            "rating": 8.8
        },
        {
            "title": "The Shawshank Redemption",
            "year": 1994,
            "director": "Frank Darabont",
            "genre": "Drama",
            "rating": 9.3
        },
        {
            "title": "Pulp Fiction",
            "year": 1994,
            "director": "Quentin Tarantino",
            "genre": "Crime",
            "rating": 8.9
        },
        {
            "title": "The Dark Knight",
            "year": 2008,
            "director": "Christopher Nolan",
            "genre": "Action",
            "rating": 9.0
        },
        {
            "title": "Forrest Gump",
            "year": 1994,
            "director": "Robert Zemeckis",
            "genre": "Drama",
            "rating": 8.8
        },
        {
            "title": "The Matrix",
            "year": 1999,
            "director": "The Wachowskis",
            "genre": "Science Fiction",
            "rating": 8.7
        },
        {
            "title": "Gladiator",
            "year": 2000,
            "director": "Ridley Scott",
            "genre": "Action",
            "rating": 8.5
        },
        {
            "title": "The Lord of the Rings: The Fellowship of the Ring",
            "year": 2001,
            "director": "Peter Jackson",
            "genre": "Fantasy",
            "rating": 8.8
        },
        {
            "title": "The Godfather",
            "year": 1972,
            "director": "Francis Ford Coppola",
            "genre": "Crime",
            "rating": 9.2
        },
        {
            "title": "Fight Club",
            "year": 1999,
            "director": "David Fincher",
            "genre": "Drama",
            "rating": 8.8
        }
    ];

    res.json(topMovies);
});

// Express GET route for the default endpoint /
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Express route to render documentation.html when accessing /documentation
app.get('/documentation', (req, res) => {
    res.sendFile(__dirname + '/public/documentation.html');
});


// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
