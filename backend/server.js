// const express = require('express')
import express from 'express';
import dotenv from 'dotenv';
// const events = require('./data/events')
import events from './data/events.js'
import connectDB from './config/db.js';

const app = express()
dotenv.config();
connectDB();

app.get('/api/events', (req, res) => {
  res.json(events)
})

app.get('/api/event/:id', (req, res) => {
  const event = events.find(e => e._id === req.params.id)
  res.json(event)
})

app.listen (5000, console.log("Server is running on port 5000!"))