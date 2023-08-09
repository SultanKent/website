import React, { useState, useEffect } from 'react';
import LoadingScreen from './loadingScreen/LoadingScreen';
import './App.css';
import Catalog from './components/catalog/Catalog';
import Command from './components/command/Command';
import Footer from './components/footer/Footer';
import Games from './components/games/Games';
import Header from './components/header/Header';
import Partners from './components/partners/Partners';
import Possibilities from './components/possibilities/Possibilities';
import Questions from './components/questions/Questions';
import Section from './components/section/Section';
import Tiers from './components/tiers/Tiers';
import Ways from './components/ways/Ways';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll('img');
    const totalImages = images.length;
    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000); // Задержка в 1 секунду
      }
    };

    images.forEach((image) => {
      image.addEventListener('load', handleImageLoad);
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener('load', handleImageLoad);
      });
    };
  }, []);

  return (
    <div className="App">
      {isLoading ? <LoadingScreen /> : (
        <div className="main-content">
          <Header/>
          <Section/>
          <Ways/>
          <Games/>
          <Catalog/>
          <Tiers/>
          <Possibilities/>
          <Command/>
          <Questions/>
          <Partners/>
          <Footer/>
        </div>
      )}
    </div>
  );
}

export default App;