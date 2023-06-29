import React from 'react';
import Ghost2 from '../assets/Ghost2.png'
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img className="animated-image" src={Ghost2} alt="Loading" />
    </div>
  );
};

export default LoadingScreen;