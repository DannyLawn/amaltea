import Calculator from '../Calculator/Calculator.jsx';
import Popup from '../Popup/Popup.jsx';
import { divisions } from '../../utils/data.js';
import { openDivision } from '../../services/slices/divisions-navigation-slice.js';
import { useDispatch, useSelector } from 'react-redux';
import { clearOrderData } from '../../services/slices/order-data-slice';
import './Divisions.css';

function Divisions() {

  const dispatch = useDispatch();
  const { openedDivision, divisionsSection, openedPopup  } = useSelector(store => store.divisionsNavigation);

  function clickDivision(division) {
    dispatch(openDivision({...division}));
    dispatch(clearOrderData());
    window.scrollTo(0, 0);
  }  

  return (
    <section className='Divisions'>
      {divisionsSection && (
        <ul className='divisionList'>
        {
          divisions.length ? (divisions.map((division) => (
            <li className='division' key={division._key} divisionkey={division._key}>
              <div className='divisionLink' onClick={() => { clickDivision(division) }}>
                <p className='divisionTitle'>{division.title}</p>
                {division.subtitle ? (<p className='divisionSubtitle'>{division.subtitle}</p>): null}
              </div>
            </li>)
          )) : (<p className='divisionAttention'>Нет доступных</p>)
        }
      </ul>
      )}

      {openedDivision && (<Calculator />)}

      {openedPopup && (<Popup />)}
      </section>
      
      )
      
}

export default Divisions;