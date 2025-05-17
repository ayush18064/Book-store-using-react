import React, { useState } from "react";
import { useNavigate,BrowserRouter,Routes,Route,Link } from "react-router-dom";
import axios from "axios"
function RegistrationPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleRegister = async () => {
        try {
            const response = await axios.post("http://localhost:9000/register",
                {
                    name, email, password
                }
            );
            if (response.status == 200) {

                console.log("Registration successfull!!");

            }

        }
        catch (error) {
            console.log(error);

        }
    }
    return (
        <>
            <div className="mt-5 container w-50">
                <div className="card p-4 shadow">
                    <h3>Registration Page</h3>
                    <label htmlFor="name" className="mt-3 form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name "
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="name" className="mt-3 form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        name="email"
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
                    <button className="btn btn-success mt-3" onClick={handleRegister}>Register</button>

                </div>
            </div>
        </>
    );
}

export default RegistrationPage;
