import express from 'express'

const router = express.Router()

router.get('/:address', (req, res) => {
  const mapURL = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAP_API_KEY}&q=${req.params.address}`


  res.json({mapURL})
 
})

export default router
