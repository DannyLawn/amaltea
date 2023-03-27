import { closePopup } from '../../services/slices/divisions-navigation-slice.js';

import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useRef } from 'react';
import React from 'react';
import './Popup.css';

const Popup = () => {
    const dispatch = useDispatch();
    const { openedPopup } = useSelector(store => store.divisionsNavigation);
    const popupElement = useRef(null);

    setTimeout(() => {
        popupElement.current.classList.add("popup_opened");
    }, 150);

    const handleClosePopup = useCallback(() => {

        popupElement.current.classList.remove("popup_opened");

        setTimeout(() => {
            dispatch(closePopup());
        }, 300);

    }, [dispatch])

    const handleEscKeydown = useCallback((e) => {
        e.which === 27 && openedPopup && handleClosePopup();
    }, [openedPopup, handleClosePopup]);

   
    React.useEffect(() => {
        document.addEventListener('keydown', handleEscKeydown);

        return () => {
            document.removeEventListener('keydown', handleEscKeydown);
        }
    }, [handleEscKeydown]);



    return (
        <section className="popup" ref={popupElement} onClick={() => handleClosePopup()} >
            <div className="popupContainer" onClick={(e) => e.stopPropagation()}>

                <form>
                    <h1 className='popupTitle'>Заявка</h1>
                    <fieldset className='listContainer'>
                        <legend>Данные</legend>
                        <ul className='popupList'>
                            <li className='popupListItem'>
                                <label className='listItemTitle' htmlFor="org">Организация:*</label>
                                <input className='popupInput' type="text" name="org" id="org" required/>
                            </li>
                            <li className='popupListItem'>
                                <label className='listItemTitle' htmlFor="place">Регион:*</label>
                                <input className='popupInput' type="text" name="place" id="place" required/>
                            </li>
                            <li className='popupListItem'>
                                <label className='listItemTitle' htmlFor="name">ФИО:*</label>
                                <input className='popupInput' type="text" name="name" id="name" required/>
                            </li>
                            <li className='popupListItem'>
                                <label className='listItemTitle' htmlFor="email">E-mail:*</label>
                                <input className='popupInput' type="email" name="mail" id="email" required/>
                            </li>
                            <li className='popupListItem'>
                                <label className='listItemTitle' htmlFor="number">Телефон:*</label>
                                <input className='popupInput' type="tel" name="phone" id="number" maxLength="21" required />
                            </li>
                        </ul>
                    </fieldset>

                    <div>
                        <button className='popupSubmitButton' type="submit">Отправить</button>
                        <p className='popupCaption'>* — Обязательные поля</p>
                    </div>

                </form>
                <div className='popup__toggle' onClick={() => handleClosePopup()} />
            </div>

        </section>
    )
}

export default Popup;