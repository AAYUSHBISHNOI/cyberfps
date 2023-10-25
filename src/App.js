import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Myheader from './Components/Myheader';
import Cyber from './Components/Cyber';
import Crypto from './Components/Crypto';
import Team from './Components/Team';
import Solana from './Components/Solana';
import Myfooter from './Components/Myfooter';
import Game from './Components/Game';
import Faq from './Components/Faq';
import Preloader from './Components/Preloader';


function App() {
  
  return (
    <>
    <Preloader/>
    <Myheader/>
    <Game/>
    <Cyber/>
    <Crypto/>
    <Team/>
    <Faq/>
    <Solana/>
    <Myfooter/>
    </>
  );
}

export default App;
