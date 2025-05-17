import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import { useNavigate } from "react-router-dom";
function HomePage() {
    const [showForm, setshowForm] = useState(false);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const navigate = useNavigate();
    const handlForm = () => {
        setshowForm(true);
    };
    const handleAddBook = async () => {
        setshowForm(true);
        try {
            const response = await axios.post("http://localhost:9000/addBook", {
                title,
                author,
                price,
                imgUrl,
            });
            alert("book added")
            console.log("Data entered successfully in the database");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container mt-5">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Book Store
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="" onClick={() => navigate("/catalog")}>
                                        Catalogue
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="card shadow p-4">
                    <h2>Home page</h2>
                    <p>Welcome user</p>
                    <button
                        className="btn btn-warning"
                        value={showForm}
                        onClick={handlForm}
                    >
                        Add books
                    </button>
                    {showForm && (
                        <form action="" className="mt-4">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Book Title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter book title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <label htmlFor="" className="form-label">
                                    Author
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Author"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                />
                                <label htmlFor="" className="form-label">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                <label htmlFor="" className="form-label">
                                    Enter Image url{" "}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter url"
                                    value={imgUrl}
                                    onChange={(e) => setImgUrl(e.target.value)}
                                />
                                <button className="btn btn-dark mt-2" onClick={handleAddBook}>
                                    Add Book
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
}

export default HomePage;
