import React from 'react';

const Map = ( {address} ) => {
  const addressCheck = String(address)
  const formattedAddress = addressCheck.replace(/ /g, '+');
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
