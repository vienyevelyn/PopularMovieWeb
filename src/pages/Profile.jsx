import React from "react";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

function Profile(){
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('UserExist'))
    const data = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        if (!user) {
        navigate('/login')
        }
    }, [user, navigate])

    
    if (!user || !data) {
        return null
    }


    const LogingOut = ()=> {
        localStorage.removeItem('UserExist')
        navigate('/login')
    }

    const checkMovie = ()=>{
        navigate('/')
    }

    return (
        <>
            <div className="bg-gray-400 rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg p-8">
                <h1 className="text-2xl md:text-4xl font-bold text-center text-white mb-2">
                    Welcome, {data.username}!
                </h1>
                <p className="text-lg mb-3 text-white">
                    <span className="font-medium text-gray-300">Email:</span>  {data.email}
                </p>
                <button className="text-white block mx-auto w-full py-2 px-4 bg-blue-600 text-white rounded-full mb-4 hover:bg-blue-700 transition duration-200" onClick={checkMovie}>
                    Check Popular Movie
                </button>
                <button className="text-white block mx-auto w-full py-2 px-4 bg-blue-600 text-white rounded-full mb-4 hover:bg-blue-700 transition duration-200" onClick={LogingOut}>
                    Log Out
                </button>
            </div>
        </>
    )


}

export default Profile