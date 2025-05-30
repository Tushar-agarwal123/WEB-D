const express = require('express');
const path = require('path');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', message: 'Welcome to the EJS Application!' });
});

// Example form route
app.get('/form', (req, res) => {
    res.render('form');
});

app.post('/form', (req, res) => {
    const { name } = req.body;
    res.render('result', { name });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});