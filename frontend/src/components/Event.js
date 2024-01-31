import React from 'react'
import {Card} from 'react-bootstrap';
import {Link } from 'react-router-dom'


const Event = ({event}) => {
  return (

    <Card className ="my-5 p-3 rounded" style ={{borderStyle: "none"}}>
      <Link to = {`./event/${event._id}`}>
          <Card.Img src ={event.image} variant ='top' className='rounded'/>
      </Link>
      <Card.Body>
      <Link to = {`./event/${event._id}`} style ={{textDecoration: 'none'}}>
        <Card.Title as ='div' style={{ height: '4rem', fontWeight: 400}}>
          <strong>{event.name}</strong>
        </Card.Title> 
      </Link>  
      <Card.Text as ='div'>
         <b>{event.date_time}</b>
      </Card.Text><br/>
      
            


      <Card.Text as ='div'style={{ height: '0.5rem', fontSize: '14px'}}>
          {event.location.venue}
          </Card.Text>
          
      <Card.Text as ='div'style={{ height: '4rem', fontSize: '14px'}}>   
          <br/>
          <i className="fa-solid fa-location-dot"></i> {event.location.address}
        <br/>
        </Card.Text>
        <Card.Text as ='div'>Ticket Price: 
         $ <b>{event.price}</b>
        </Card.Text><br/>
      </Card.Body>
    </Card>
   
  )
}

export default Event;