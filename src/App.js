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
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const handleImagesLoaded = () => {
      setImagesLoaded(true);
    };

    const images = document.querySelectorAll('img');
    images.forEach((image) => {
      image.addEventListener('load', handleImagesLoaded);
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener('load', handleImagesLoaded);
      });
    };
  }, []);
  return (
    <div className="App">
      {!imagesLoaded ? <LoadingScreen /> : (
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