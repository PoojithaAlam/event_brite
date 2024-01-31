import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, Card, Button, ListGroup } from "react-bootstrap";
import "./EventScreen.css";
import Map from "../components/Map";

export const EventScreen = () => {
  const params = useParams();
  const [event, setEvent] = useState({})

  useEffect( () => {
    const fetchEvent = async() => {
      const {data} = await axios.get(`/api/event/${params.id}`)
      setEvent(data)
    }
    fetchEvent()
  })
  const locationVenue = event.location && event.location.venue;
  const locationAddress = event.location && event.location.address;


return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
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

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
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
  );
};
