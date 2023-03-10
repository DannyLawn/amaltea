import { useSelector } from "react-redux";
import Header from '../Header/Header';
import BackButton from "../BackButton/BackButton";
import MainTitle from '../MainTitle/MainTitle';
import Divisions from '../Divisions/Divisions';
import Benefit from "../Benefit/Benefit";
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import './App.css';

function App() {

  const { divisionsSection, aboutUsSection, mainTitleSection, backButton, benefitSection } = useSelector(store => store.divisionsNavigation);

  return (
    <div className="App">
      <Header />
      {backButton && (<BackButton />)}
      {mainTitleSection && (<MainTitle />)}
      <main className='App-content'>
        <Divisions />
        {benefitSection && (<Benefit />)}
        {aboutUsSection && (<AboutUs />)}
      </main>
      <Footer />
    </div>
  );
}

export default App;
