import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate();
    const WhenRegis = (e) =>{
        e.preventDefault()
        if (!username || !password || !email){ 
            return alert("Fill all fields!")
        }

        localStorage.setItem('user', JSON.stringify({username, password, email}))

        alert("Registration successful!")
        navigate('/login')

    }
    return(

        <>
            <div className="flex flex-col md:flex-row bg-gray-400 rounded-md backdrop-filter gap-x-8 backdrop-blur-sm bg-opacity-10 shadow-lg p-6 items-center">
                <div className="left-side">
                    <h1 className="md:text-4xl text-2xl font-bold md:mb-4 mb-2 text-white">Welcome to moviePopular</h1>
                    <p className="text-white">Please Sign Up Your Account</p>
                </div>
                <div className="right-side">
                    <h1 className="text-white md:text-2xl text-xl font-bold mb-4">Sign Up</h1>
                    <form onSubmit={WhenRegis} className="flex flex-col gap-y-5">
                        <div>
                            <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}
                            className="w-full px-4 py-2 rounded-md bg-white/10 backdrop-blur-md text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <input type="email" placeholder="abc@gmail.com" value={email} onChange={e => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded-md bg-white/10 backdrop-blur-md text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <input type="password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded-md bg-white/10 backdrop-blur-md text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                        <button type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-full mb-4 hover:bg-blue-700 transition duration-200">Sign up</button>

                    </form>
                    <p className="text-white">Not Your First Time? <span className="font-bold underline"><Link to={"/login"}>Login</Link></span></p>
                </div>
            </div>


        </>
    )

}

export default Register