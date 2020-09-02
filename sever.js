// imports
const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const port = process.env.PORT || 3001;
const app = express();

// middleware - JSON parsing
app.use(express.json())

// middleware - cors
app.use(cors())

// middleware - API routes
app.use('/api/translations', routes.translations);

// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));