import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Movie(){

    const[data, setData] = useState([])
    const[error, setError] = useState("")
    const[search, setSearch] = useState("")
    const[query, setQuery] = useState("")
    const[currentPage, setCurrentPage] = useState(1)

    const pagination = 4;
    const key = "6b0cdf861729b996b5d6ef9ffb83a488";

    const url = query ? `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`
    : `https://api.themoviedb.org/3/movie/popular?api_key=${key}`

    const WhenSearch = (e) => {
        e.preventDefault()
        setQuery(search.trim())
        setCurrentPage(1)
    }

    async function fetchMovies(){
        try {
            const response = await axios.get(url)

            setData(response.data.results || [])
            setError("")

        } 
        catch(err){
            console.error(err)
            setError("There's a problem when fetching the Movies.")
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [query])

    const indexOfLast = currentPage * pagination
    const indexOfFirst = indexOfLast - pagination
    const currentMovies = data.slice(indexOfFirst, indexOfLast)
    const totalPages = Math.ceil(data.length / pagination)

    const goToNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1)
    }

    const goToPrev = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1)
    }



    return(
        <>
        <Link to={"/profile"}><button className="m-4 mt-0 px-4 py-2 bg-blue-600 text-white block rounded-md hover:bg-blue-700 transition">Back To Profile</button></Link>
            <div className="bg-gray-400 rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg py-10 px-4">
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white">Most Popular Movie</h1>
                <form onSubmit={WhenSearch} className="text-center mb-8">
                    <input type="text" placeholder="Search title.." value={search} onChange={e => setSearch(e.target.value)}
                    className="w-full sm:w-1/2 px-4 py-2 rounded-md text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <button type="submit"
                    className="ms-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">Search</button>
                </form>

                {error && <p className="text-center text-red-400 text-lg mb-6">{error}</p>}
                
                {data.length === 0 ? (
                    <p className="text-center text-red-400 text-lg">Movie not found. Please try again</p>
                ) 
            : (<>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {currentMovies.map((movie) => (
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                <div key={movie.id} className="bg-white bg-opacity-10 backdrop-blur-md text-white rounded-lg overflow-hidden shadow-md hover:scale-105 transition duration-300 border border-white/20">


                <img src={movie.poster_path ? 
                `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/250x300?text=No+Image"}
                  className="w-full h-[400px]"/>


                <div className="p-4">
                    <h2 className="text-lg font-bold">{movie.title}</h2>
                </div>
            </div>
            </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button onClick={goToPrev} disabled={currentPage === 1} className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50 hover:bg-blue-700 transition">
                Prev
            </button>

            <span className="text-lg font-medium text-white mx-3">Page {currentPage} of {totalPages} </span>

            <button onClick={goToNext} disabled={currentPage === totalPages} className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50 hover:bg-blue-700 transition">
                Next
            </button>
          </div>
            </>)}
        
        
        </div>
        </>
    )
}

export default Movie