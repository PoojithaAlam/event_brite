import mongoose from 'mongoose'


const eventSchema = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  organizer: {
    type: String,
    required: true
  },
  date_time: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true,
    default: 30
  },
  spaceLeft: {
    type: Number,
    required: true,
    default: 0
  },
  followers: {
    type: Number,
    required: true,
    default: 100
  },
}, {
  timestamps: true
})

const Event = mongoose.model('events', eventSchema)
export default Event