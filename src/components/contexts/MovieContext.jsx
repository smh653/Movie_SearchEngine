import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    // Load favorites from localStorage on mount
    useEffect(() => {
        const storedFav = localStorage.getItem("favorites");
        if (storedFav) {
            setFavorites(JSON.parse(storedFav));
        }
    }, []);

    // Save favorites to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    // Add a movie to favorites
    const addFavorite = (movie) => {
        setFavorites((prev) => [...prev, movie]);
    };

    // Remove a movie from favorites
    const removeFavorite = (movie) => {
        setFavorites((prev) => prev.filter((fav) => fav.id !== movie.id));
    };
    

    // Check if a movie is in favorites
    const isFavorite = (movieId) => {
        return favorites.some((fav) => fav.id === movieId);
    };

    // Provide context values
    const value = {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
    };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
};
