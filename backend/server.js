// const express = require('express')
// const events = require('./data/events')
//import events from './data/events.js'
import express from 'express';
import dotenv from 'dotenv';
import eventRoutes from './routes/eventRoutes.js'
import mapRoutes from './routes/mapRoutes.js'
import connectDB from './config/db.js';
import errorHandler from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'

const app = express()
dotenv.config()
connectDB()

app.use(express.json())
app.use('api/users', userRoutes)
app.use('/api/events', eventRoutes)
app.use('/api/map', mapRoutes)
app.use(errorHandler)

app.listen(5000, console.log('Server is running on port 5000'))
