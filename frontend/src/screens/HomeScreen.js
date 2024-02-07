import React, {useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listEvents } from '../actions/eventActions'
import Event from '../components/Event'
import Loader from '../components/Loader'
import Message from '../components/Message'


const HomeScreen = () => {

  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(listEvents())    
    }, [dispatch])

  const eventList = useSelector( (state) => state.eventList)
  const { loading, events, error } = eventList

  return (
    <>
      <h1>Best Events and Things to Do</h1>
      {
        loading ? (<Loader />)
          : error ? (<Message variant='danger'> {error}</Message>)
            : 
              <Row>
                {events.map(p => (
                  <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
                    <Event event={p} />
                  </Col>
                  ))
                }
            </Row>
      
      }
      
    </>
  )
}

export default HomeScreen