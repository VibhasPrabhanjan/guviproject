export interface Movie {
  movieId: number;
  title: string;
  genre: string;
  rating: number;
  reviews: number;
}

export const movieData: Movie[] = [
  { movieId: 1, title: "The Shawshank Redemption", genre: "Drama", rating: 9.3, reviews: 2654 },
  { movieId: 2, title: "The Godfather", genre: "Crime", rating: 9.2, reviews: 1825 },
  { movieId: 3, title: "The Dark Knight", genre: "Action", rating: 9.0, reviews: 2987 },
  { movieId: 4, title: "Pulp Fiction", genre: "Crime", rating: 8.9, reviews: 2156 },
  { movieId: 5, title: "Forrest Gump", genre: "Drama", rating: 8.8, reviews: 2043 },
  { movieId: 6, title: "Inception", genre: "Sci-Fi", rating: 8.8, reviews: 2765 },
  { movieId: 7, title: "The Matrix", genre: "Sci-Fi", rating: 8.7, reviews: 1987 },
  { movieId: 8, title: "Goodfellas", genre: "Crime", rating: 8.7, reviews: 1456 },
  { movieId: 9, title: "Interstellar", genre: "Sci-Fi", rating: 8.6, reviews: 1876 },
  { movieId: 10, title: "The Departed", genre: "Crime", rating: 8.5, reviews: 1234 },
  { movieId: 11, title: "Gladiator", genre: "Action", rating: 8.5, reviews: 1654 },
  { movieId: 12, title: "Saving Private Ryan", genre: "War", rating: 8.6, reviews: 1432 },
  { movieId: 13, title: "Schindler's List", genre: "Drama", rating: 8.9, reviews: 1567 },
  { movieId: 14, title: "Titanic", genre: "Romance", rating: 7.9, reviews: 2876 },
  { movieId: 15, title: "Casablanca", genre: "Romance", rating: 8.5, reviews: 876 },
  { movieId: 16, title: "The Avengers", genre: "Action", rating: 8.0, reviews: 3245 },
  { movieId: 17, title: "Mad Max: Fury Road", genre: "Action", rating: 8.1, reviews: 2154 },
  { movieId: 18, title: "Blade Runner 2049", genre: "Sci-Fi", rating: 8.0, reviews: 1876 },
  { movieId: 19, title: "Apocalypse Now", genre: "War", rating: 8.4, reviews: 987 },
  { movieId: 20, title: "The Notebook", genre: "Romance", rating: 7.8, reviews: 1567 },
  { movieId: 21, title: "La La Land", genre: "Romance", rating: 8.0, reviews: 2134 },
  { movieId: 22, title: "Dunkirk", genre: "War", rating: 7.8, reviews: 1456 },
  { movieId: 23, title: "1917", genre: "War", rating: 8.2, reviews: 1789 },
  { movieId: 24, title: "Parasite", genre: "Drama", rating: 8.6, reviews: 2345 },
  { movieId: 25, title: "Joker", genre: "Drama", rating: 8.4, reviews: 2876 }
];