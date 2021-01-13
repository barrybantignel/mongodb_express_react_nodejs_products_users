const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



require('dotenv').config();

const app = express();
const port = process.env.PORT || 5003;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb+srv://boubacar:user@clusterfetowelbarry.oxkgn.mongodb.net/<dbname>?retryWrites=true&w=majority", {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
});

const produitsRouter = require('./routes/produits');
const usersRouter = require('./routes/users'); 

app.use('/produits', produitsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server est lancé au port: ${port}`);
});
