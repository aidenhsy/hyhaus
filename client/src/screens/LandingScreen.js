import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LandingScreen = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/photos');
      setPhotos(data);
    };
    fetchProducts();
  }, []);

  console.log(photos);

  return <div></div>;
};

export default LandingScreen;
