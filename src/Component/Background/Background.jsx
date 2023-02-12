import React, { useState, useEffect } from 'react';

const Background = ({ images, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, images]);

  const style = {
    backgroundImage: `linear-gradient(to bottom, rgba(255, 110, 199, 0.8), rgba(142, 45, 226, 0.8)), url(${images[currentIndex]})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'top',
    height: '100vh',
    width: '100%',
    transition: 'background-image 5s ease-in-out',
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default Background;
