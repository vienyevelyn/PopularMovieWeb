import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    const WhenLogin = (e) =>{
        e.preventDefault()
        const savedUser = JSON.parse(localStorage.getItem('user'))

        if (!savedUser || savedUser.username !== username || savedUser.password !== password) {
            alert("Sorry.. Please Check Your Username and Password again!")
            return
        }

        localStorage.setItem('UserExist', JSON.stringify({username}))
        navigate('/profile')

    }
    return(

        <>
            <div className="flex bg-gray-400 rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg p-6">
                <div className="left-side">
                    <h1 className="text-4xl font-bold mb-4 text-white">Welcome to moviePopular</h1>
                    <p className="text-white">Please Login to Your Account</p>
                </div>
                <div className="right-side">
                    <h1 className="" style={{ color: "#090979" }}>Login</h1>
                    <form onSubmit={WhenLogin}>
                        <div>
                            <input type="text" placeholder="username"/>
                        </div>
                        <div>
                            <input type="password"/>
                        </div>
                        <button type="submit">Login</button>

                    </form>
                    <span>Don't Have Any Account? <Link to={"/regis"}>Register</Link></span>
                </div>
            </div>


        </>
    )

}

export default Login