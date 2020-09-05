const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

// middleware

app.use(express.urlencoded ({ extended: true}));
app.use(express.json());


// routes


