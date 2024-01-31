import React from 'react';

<<<<<<< HEAD
const Map = ({ address }) => {
  const formattedAddress = address.replace(/ /g, '+');
=======
const Map = ( {address} ) => {
  const addressCheck = String(address)
  const formattedAddress = addressCheck.replace(/ /g, '+');
>>>>>>> 1a19108cd679e69c0542f18031270ad460220188
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAP_API_KEY}&q=${formattedAddress}`;
  
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
