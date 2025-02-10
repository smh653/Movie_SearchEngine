import React from "react";
import "../../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../Moviecard";

const Favorites = () => {
    const { favorites } = useMovieContext();

    console.log("Favorites:", favorites); // Add this to debug

    if (favorites.length > 0) {
        return (
            <div className='favorites'>
                <div className="favorites-list">
                    {favorites.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="favorites-empty">
            <h2>No favorites yet</h2>
            <p>Start adding movies to your favorites and they will appear here</p>
        </div>
    );
};


export default Favorites;
