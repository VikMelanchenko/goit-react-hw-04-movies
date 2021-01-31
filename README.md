
Student project Movie search for GoIt school.

Created basic routing for movie search and storage application.
The themoviedb.org API was used for the backend. 
In this work were used the following endpoints: 
- https://developers.themoviedb.org/3/trending/get-trending - the list of the most popular films for today to build a collection on the home page ("/");
- https://developers.themoviedb.org/3/search/search-movies - searching for a movie by keyword on the movies page ("/movies");
- https://developers.themoviedb.org/3/movies/get-movie-details - full movie information requesting for the movie page ("/movies/:movieId");
- https://developers.themoviedb.org/3/movies/get-movie-credits and https://developers.themoviedb.org/3/movies/get-movie-reviews - requesting information about the cast and reviews for the movie page.
Added asynchronous loading of JS code for application routes that used React.lazy () and Suspense.

