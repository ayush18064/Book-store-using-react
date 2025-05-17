import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import axios from "axios"
function LoginPage() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const validateLogin = async () => {
        try {
            const response = await axios.post("http://localhost:9000/login", {
                email,
                password,
            });
            navigate("/home")
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert("Invalid email or password");
            } else {
                alert("Login failed, please try again");
                console.error(error);
            }
        }
    };
    return (
        <div className="container mt-5 w-50">
            <div className="card p-4 shadow ">
                <h3>Login Page</h3>
                <label htmlFor="name" className="mt-3 form-label">
                    Login Email
                </label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your login email"
                    name="name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password" className="mt-3 form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn btn-success mt-3 " onClick={validateLogin}>Login</button>
            </div>
        </div>
    );
}

export default LoginPage;
