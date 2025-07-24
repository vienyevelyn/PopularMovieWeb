import React from "react";
import { useParams, Link } from "react-router-dom";
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
        <Link to={"/"}><button className="m-4 mt-0 px-4 py-2 bg-blue-600 text-white block rounded-md hover:bg-blue-700 transition">Back</button></Link>
        <div className="bg-gray-400 rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg p-8 flex flex-col md:flex-row">
            <div className="left-side md:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">{movie.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="w-full max-w-[300px] mx-auto rounded-lg shadow-md mb-8"
                    alt={movie.title}
                />
            </div>
            <div className="right-side md:w-1/3">
                <p className="mb-2 text-white text-start"><span className="font-semibold">Release Date:</span> {movie.release_date}</p>
                <p className="mb-2 text-white text-start"><span className="font-semibold">Rating:</span> {movie.vote_average}</p>
                <p className="mb-2 text-white text-start"><span className="font-semibold">Overview:</span> {movie.overview}</p>

            </div>
            
        </div>
        </>
    )
}

export default MovieDetail