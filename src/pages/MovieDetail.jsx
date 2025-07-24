import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function MovieDetail(){
    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [error, setError] = useState("")


    const key = "6b0cdf861729b996b5d6ef9ffb83a488"
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`

    async function fetchMovies(){
        try
        {const response = await axios.get(url)

        setMovie(response.data)
        setError("")}

        catch(err){
            console.error(err)
            setError("There's a problem when fetching the Movies.")
        }

        
    }

    useEffect(() => {
        fetchMovies()
    }, [id])


    if (error){
        return <p className="text-center">{error}</p>
    }
    if (!movie) {
        return <p className="text-center">Please wait a moment...</p>;
    }

    return(
        <>
        <div className="bg-gray-400 rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="w-full mb-4"
                alt={movie.title}
            />
            <p className="mb-2"><strong>Release Date:</strong> {movie.release_date}</p>
            <p className="mb-2"><strong>Rating:</strong> {movie.vote_average}</p>
            <p className="mb-2"><strong>Overview:</strong> {movie.overview}</p>

        </div>
        </>
    )
}

export default MovieDetail