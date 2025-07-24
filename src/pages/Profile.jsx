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
        navigate('/Movie')
    }

    return (
        <>
            <div className="bg-gray-400 rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg p-8">
                <h1 className="text-3xl font-bold mb-4">
                    Welcome, {data.username}!
                </h1>
                <p className="text-lg mb-2">
                    <span>Email: {data.email}</span> 
                </p>
                <button className="text-white" onClick={checkMovie}>
                    Check Popular Movie
                </button>
                <button className="text-white" onClick={LogingOut}>
                    Log Out
                </button>
            </div>
        </>
    )


}

export default Profile