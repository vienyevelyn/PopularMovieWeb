import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    const WhenRegis = (e) =>{
        e.preventDefault()
        if (!username || !password){ 
            return alert("Fill all fields!")
        }

        localStorage.setItem('user', JSON.stringify({username, password}))

        alert("Registration successful!")
        navigate('/login')

    }
    return(

        <>
            <div className="flex bg-gray-400 rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg p-6">
                <div className="left-side">
                    <h1 className="text-4xl font-bold mb-4 text-white">Welcome to moviePopular</h1>
                    <p className="text-white">Please Sign Up Your Account</p>
                </div>
                <div className="right-side">
                    <h1 className="" style={{ color: "#090979" }}>Sign Up</h1>
                    <form onSubmit={WhenRegis}>
                        <div>
                            <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)}/>
                        </div>
                        <div>
                            <input type="password" onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <button type="submit">Login</button>

                    </form>
                    <span>Have An Account? <Link to={"/login"}>Register</Link></span>
                </div>
            </div>


        </>
    )

}

export default Register