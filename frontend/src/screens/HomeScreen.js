import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Event from '../components/Event'
import { Col, Row } from 'react-bootstrap'


const HomeScreen = () => {
  const [events, setEvents] = useState([])
  useEffect( () => {
    const fetchEvents = async() => {
      const {data} = await axios.get('/api/events')
      setEvents(data)
    }
    fetchEvents()    
  })
  return (
    <>
      <h1>Best Events and Things to Do</h1>
      <Row>
        {events.map(p => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Event event={p} />
          </Col>
          ))
        }
      </Row>
    </>
  )
}

export default HomeScreen