import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
function CataloguePage() {
    const [books, setBooks] = useState([])

    // fetch book when the component mount
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get("http://localhost:9000/books")
                setBooks(response.data)
            }
            catch (error) {
                console.log(error);

            }
        };
        fetchBooks();

    }, [])

    return (
        <>
            <div className="container mt-5 ">
                <h3>Books Catalog</h3>
                <div className="row">
                    {books.map((book) => (
                        <div className="my-2 card mx-2" style={{ width: "18em" }}>
                            <img src={book.img_url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">{book.title}</h4>
                                <p className="card-text">{book.author}</p>
                                <strong><p className="card-text">₹{book.price}.</p></strong>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CataloguePage