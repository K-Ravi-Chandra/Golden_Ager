require('dotenv').config({path: "./config.env"});
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const path = require('path');

//connect DB
connectDB();

const app = express();

// get data from body
app.use(express.json());

// redirect to auth 
app.use('/api/auth', require('./routes/auth'));  

app.use('/api/private', require('./routes/private'));

app.use('/api/donate', require('./routes/donate'));

app.use('/api/contact', require('./routes/contact'));   

// Error Handler (last piece of middleware)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    } );
}

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


process.on("unhandledRejection", (err, promise)=>{ 
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
})   