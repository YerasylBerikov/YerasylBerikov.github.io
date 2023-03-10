const movies = [
    {
      title: "Dedpul 2",
      genre: "Science Fiction",
      rating: 7.4,
      duration: "2h 16min"
    },
    {
      title: "Bystree Puli",
      genre: "Crime",
      rating: 7.7,
      duration: "2h 55min"
    },
    {
      title: "Odnajdy v Gollivude",
      genre: "Comedy",
      rating: 5.9,
      duration: "2h 22min"
    }
  ];

function eraObject(title, genre, rating, duration) {
    const eraObject = {
      title: title,
      genre: genre,
      rating: rating,
      duration: duration
    }
    return eraObject
  }
  const era = eraObject("Odnajdy v Gollivude","Comedy",5.9,"2h 22min");
  console.log(era);
  
  // Function to display movies on the page
  function displayMovies() {
    const moviesList = document.getElementById("movies");
    movies.forEach(movie => {
      const li = document.createElement("li");
      li.innerText = `${movie.title} (${movie.genre}) - Rating: ${movie.rating} - Duration: ${movie.duration}`;
      moviesList.appendChild(li);
    });
  }
  
  // Call the displayMovies function when the page loads
  window.onload = displayMovies;
