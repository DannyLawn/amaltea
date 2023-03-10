import logoAmaltea from '../../images/logo1.jpg';
import LogoVL from '../../images/logo2.jpg';
import './Header.css';

function Header () {
    return (
        <header className="App-header">
            <img src={logoAmaltea} className="headerLogo" alt="Логотип Амалтея." />
            <img src={LogoVL} className="headerLogo" alt="Логотип ВиЭль." />
        </header>
    );
}

export default Header;