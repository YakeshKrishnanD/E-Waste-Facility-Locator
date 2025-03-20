import React, { useState, useEffect } from "react";

const GoogleMapEmbed = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "500px", borderRadius: "10px", overflow: "hidden" }}>
      {userLocation ? (
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps?q=E-Waste+Collection+Centers+near+me&ll=${userLocation.lat},${userLocation.lng}&z=13&output=embed`}
        ></iframe>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default GoogleMapEmbed;
