import mpt from '../../images/MPT.png';
import './AboutUs.css';

function AboutUs() {
    return (
        <section className='AboutUs'>
            <p className='aboutUsText'>Качество товара подтверждено документами согласно установленным
            требованиям и стандартам РФ для каждого типа товара</p>
            <a className='aboutUsLink' href="https://gisp.gov.ru/service-market/org/16116722/" rel="noreferrer" target='_blank' >
                <img src={mpt} alt="Логотп Минпромторг." className='aboutUsImage' /> 
            </a>
      </section>
    );
}

export default AboutUs;