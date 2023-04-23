import logoFooterAmaltea from '../../images/footerLogo.png';
import logoFooterVL from '../../images/footerLogoVL.png';
// import logoFooterGlobotech from '../../images/developmentIcon.png';
import './Footer.css';

function Footer() {
    return (
        <footer className='Footer'>
            <div className='footerContainer'>
                <div className='contactsContainer'>
                    <p className='footerPerson'>Никитина Наталья Леонидовна, <br /> региональный директор</p>
                    <a className='contacts' href="mailto:nkn-amaltea@mail.ru">nkn-amaltea@mail.ru</a>
                    <a className='contacts' href="tel:+79219843445">8-921-321-86-51</a>
                </div>
                <div className='footerLinkAmalteaContainer'>
                    <a href='https://amaltea-spb.com/' target='_blank' rel="noreferrer">
                        <img className='footerLogo' alt="Логотп Амалтея." src={logoFooterAmaltea} />
                    </a>
                    <a href='https://test-psy.ru/' target='_blank' rel="noreferrer">
                        <img className='footerLogo' alt="Логотп ВиЭль." src={logoFooterVL} />
                    </a>
                </div>
            </div>
            {/* <div className='developmentLogoContainer'>
                <a href='https://dannylawn.github.io/globotech/' target='_blank' rel="noreferrer">
                    <img className='footerDeveloperLogo' alt="Логотп Глоботэк." src={logoFooterGlobotech} />
                </a>
            </div> */}

        </footer>

    );
}

export default Footer;