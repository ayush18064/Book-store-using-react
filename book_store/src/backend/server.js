const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Test@1234",
    database: "book_store"
})
db.connect((err) => {
    if (err) console.log("Error connecting to the database");
    else console.log("MYSQL connected successfully");


})
const app = express();
app.use(express.json())
app.use(cors())

app.post("/register", (req, res) => {
    const { name, email, password } = req.body
    console.log(name, email, password);
    const register = `INSERT INTO user(name,email,password) VALUES("${name}","${email}","${password}")`;
    db.query(register, (err, results) => {
        if (err) {
            console.log("Some error in registering", err);
            res.status(400).send("Error registering")


        }
        else {
            const getId = results.insertId
            res.status(201).send(`User registered successfully with id ${getId}`)
        }
    })

})

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const login = `SELECT * FROM user WHERE email = ? and password = ?`;
    db.query(login, [email, password], (err, results) => {
        if (err) console.log("Error loggin in");
        else if (results.length > 0) {

            console.log("Logged in redirecting to home page");
            res.status(201).send("logged in correctly")

        }
        else {
            res.status(401).send("Invalid email or password");

        }
    })

})
app.post("/addBook", (req, res) => {
    const { title, author, price, imgUrl } = req.body;
    console.log(title, author, price, imgUrl);
    const addBook = `INSERT INTO book_data (title,author,img_url,price) VALUES("${title}","${author}","${imgUrl}","${price}")`;
    db.query(addBook, (err, results) => {
        if (err) console.log("error adding the books");
        else {
            const getId = results.insertId;
            console.log(`book added with id:${getId}`);

        }

    })

})
app.get("/books",(req,res)=>{
    const fetchBooks = `SELECT * FROM book_data`;
    db.query(fetchBooks,(err,results)=>{
        if(err) console.log("Error fetching the data");
        else {
            res.status(200).json(results);
        }
        
    })
})
const port = 9000
app.listen(port, () => {
    console.log(`server listening on port ${port}`);

})