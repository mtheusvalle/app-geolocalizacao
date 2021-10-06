import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [address, setAddress] = useState([]);

  const handleAddress = (address) => {
    setAddress(address);
  };

  useEffect(() => {
    axios
      .get("https://api.geoapify.com/v1/geocode/search", {
        params: {
          text: "São Paulo",
          apiKey: process.env.REACT_APP_KEY_API,
        },
      })
      .then((response) => {
        setAddress(response.data.features);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [address]);

  return (
    <>
      <p>{address}</p>
      <button onClick={() => handleAddress("29375000")}>clique aqui</button>
    </>
  );
}
