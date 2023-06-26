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
  return (
    <div className="App">
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
  );
}

export default App;
