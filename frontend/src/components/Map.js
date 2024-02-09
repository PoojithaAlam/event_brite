import React, { useEffect, useState } from 'react';
import axios from "axios"

const Map = ( {address} ) => {
  
  const [ mapUrl, setMapUrl] = useState()

  useEffect( () => {

    const getMapUrl = async() => {
      const addressCheck = String(address)
      const formattedAddress = addressCheck.replace(/ /g, '+');
      const response = await axios.get(`/api/map/${formattedAddress}`)
      setMapUrl(response.data.mapURL)
    }
    getMapUrl()
  }, [address])

  return (
    <iframe
      title="Google Maps"
      style={{ border: 0, width: "30%" }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={mapUrl}
    ></iframe>
  );
};

export default Map;
