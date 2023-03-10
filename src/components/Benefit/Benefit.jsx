import listItem from '../../images/listItem.jpg';
import './Benefit.css';

const Benefit = () => {
    return (
        <section className='Benefit'>
            <ul className='benefitList'>
                <li className='benefitItem'>
                    <img className='benefitListIcon' src={listItem}/>
                    <p className='benefitText'>Возможна комплектация, дополненная мультимедийными средствами</p>
                </li>
                <li className='benefitItem'>
                    <img className='benefitListIcon' src={listItem}/>
                    <p className='benefitText'>Предоставление технических характеристик, оказание помощи в составлении аукционной документации</p>
                </li>
                <li className='benefitItem'>
                    <img className='benefitListIcon' src={listItem}/>
                    <p className='benefitText'>Доставка до дверей 2 – 7 дней за счет поставщика</p>
                </li>
            </ul>

        </section>
    )
}

export default Benefit;