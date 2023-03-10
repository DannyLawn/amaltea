import Calculator from '../Calculator/Calculator.jsx';
import { divisions } from '../../utils/data.js';
import { openDivision } from '../../services/slices/divisions-navigation-slice.js';
import { useDispatch, useSelector } from 'react-redux';
import './Divisions.css';
import { useEffect } from 'react';

function Divisions() {

  const dispatch = useDispatch();
  const { openedDivision, divisionsSection  } = useSelector(store => store.divisionsNavigation);


  function clickDivision(division) {
    dispatch(openDivision({...division}));
    window.scrollTo(0, 0);
    // if (e.target.textContent && e.target.nextElementSibling?.textContent) {
    //   const dataObj = {
    //     title: e.target.textContent,
    //     subtitle: e.target.nextElementSibling.textContent
    //   }
    //   dispatch(openDivision({...dataObj}));
    //   window.scrollTo(0, 0);

    // } else if (e.target.classList.contains('divisionTitle')) {
    //   const dataObj = {
    //     title: e.target.textContent,
    //     subtitle: null
    //   }
    //   dispatch(openDivision({...dataObj}));
    //   window.scrollTo(0, 0);

    // } else {
    //   const dataObj = {
    //     title: null,
    //     subtitle: e.target.textContent
    //   }
    //   dispatch(openDivision({...dataObj}));
    //   window.scrollTo(0, 0);
    // }
  }

  return (
    <section className='Divisions'>
      {divisionsSection && (
        <ul className='divisionList'>
        {
          divisions.length ? (divisions.map((division) => (
            <li className='division' key={division._key} divisionkey={division._key}>
              <a className='divisionLink' onClick={() => { clickDivision(division) }}>
                <p className='divisionTitle'>{division.title}</p>
                <p className='divisionSubtitle'>{division.subtitle}</p>
              </a>
            </li>)
          )) : (<p className='divisionAttention'>Нет доступных</p>)
        }
      </ul>
      )}

      {openedDivision && (<Calculator />)}
      </section>
      
      )
      
}

export default Divisions;