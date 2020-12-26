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

  return (
    <div>
      {[...new Array(100)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
        )
        .join('\n')}
    </div>
  );
};

export default LandingScreen;
