import logoFooterAmaltea from '../../images/footerLogo.png';
import logoFooterVL from '../../images/footerLogoVL.png';
import './Footer.css';

function Footer() {
    return(
        <footer className='Footer'>
            <div className='contactsContainer'>
                <p className='footerPerson'>Никитина Наталья Леонидовна, <br/> региональный директор</p>
                <a className='contacts' href="mailto:nkn-amaltea@mail.ru">nkn-amaltea@mail.ru</a>
                <a className='contacts' href="tel:+79219843445">8-921-321-86-51</a>
            </div>
            <div className='footerLinkContainer'>
                <a href='https://amaltea-spb.com/' target='_blank'>
                    <img className='footerLogo' src={logoFooterAmaltea} />
                </a>
                <a href='https://test-psy.ru/' target='_blank'>
                    <img className='footerLogo' src={logoFooterVL} />
                </a>
            </div>
      </footer>
    );
}

export default Footer;