import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link, useNavigate } from "react-router-dom";
import { Row, Col, Form, Image, Card, Button, ListGroup } from "react-bootstrap";
import { listEventDetails } from '../actions/eventActions';
import Loader from '../components/Loader'
import Message from '../components/Message'
import "./EventScreen.css";
import Map from "../components/Map";

export const EventScreen = () => {

  const [qty, setQty] = useState(1)
  const params = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  

  useEffect( () => {
    dispatch(listEventDetails(params.id))
  },[dispatch, params])

  const eventDetails = useSelector((state) => state.eventDetails)
  const {loading, event, error} = eventDetails
  
  const locationVenue = event.location && event.location.venue;
  const locationAddress = event.location && event.location.address;

  const addToCartHandler = () =>{
    navigate(`/cart/${params.id}?qty=${qty}`)
  }

return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {
        loading ? (<Loader />) 
        : error? (<Message variant='danger'>{error}</Message>) : (
          <>
      <Row>
        <div className="containerStyle">
            <Image src={event.image} alt={event.name} fluid style={{ maxWidth: "100%" , height:"50vh"}}/>
          </div>
      </Row>
      <Row>
         <ListGroup.Item style={{ marginTop: "20px"}}>
            &nbsp; <i className="fa-solid fa-user-plus">
                &nbsp;<b>Followers: {event.follower}</b>
              </i>
              <Button
              style={{ backgroundColor: "#4B0082", marginLeft: "30px" }} variant="dark"
            >
              Follow
            </Button>
          </ListGroup.Item>    
      </Row>
      <br></br>
      <Row>
        <Col md={8} className="padding">
          <ListGroup className="Details" variant="flush">
            <ListGroup.Item>
              <h3>{event.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Price : ${event.price}</b>
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Description : {event.description}</b>
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Organiser : {event.organizer}</b>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <b>
                  <i className="fa-solid fa-calendar-days"></i> Date & Time :{event.date_time}
                </b>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <b>
                  <i className="fa-solid fa-clock"></i> Duration : {event.duration}
                </b>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <b>
                  <i className="fa-solid fa-building"></i> Venue : {locationVenue}
                </b>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <b>
                  <i className="fa-solid fa-location-dot"></i> Location : {locationAddress}
                  
                </b>
                <Map address={locationAddress} />
              </Row>
             </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3} className="custom-width-col">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    <b>Ticket Price:</b>
                  </Col>
                  <Col>
                    <strong>${event.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <b>Status:</b>
                  </Col>
                  <Col>
                    <b> {event.spaceLeft > 0 ? "Available" : "Sold Out"}</b>
                  </Col>
                </Row>
              </ListGroup.Item>
              {event.spaceLeft > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                       as='select'
                       value={qty}
                      onChange={e => setQty(e.target.value)}
                      >
                        {
                          [...Array(event.spaceLeft).keys()].map(x => (
                          <option key={x+1} value={x+1}>{x+1}</option>))
                        }
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )

              }

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  onClick={addToCartHandler}
                  disabled={event.spaceLeft === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
            </Card>
        </Col>
      </Row>
      </>
      )
      }
    </>
  )
}

export default EventScreen