import { closePopup } from '../../services/slices/divisions-navigation-slice.js';
import { addUserData } from '../../services/slices/order-data-slice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useRef, useState, useEffect } from 'react';
import React from 'react';
import './Popup.css';

const Popup = () => {
    const dispatch = useDispatch();
    const { openedPopup } = useSelector(store => store.divisionsNavigation);
    // const { userData } = useSelector(store => store.orderData);
    const popupElement = useRef(null);
    const containerElement = useRef(null);

    setTimeout(() => {
        popupElement.current.classList.add("popup_opened");
        containerElement.current.classList.add("popupContainer_opened");
    }, 150);

    const handleClosePopup = useCallback(() => {

        popupElement.current.classList.remove("popup_opened");
        containerElement.current.classList.remove("popupContainer_opened");

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

    //данные формы
    const [dataForm, setDataForm] = useState({
        org: "",
        place: "",
        name: "",
        mail: "",
        phone: ""
    });

    const [submitDisabled, setSubmitDisabled] = useState(false);

    const onChange = (e) => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(addUserData(dataForm));
    }

    useEffect(() => {
        setSubmitDisabled(!dataForm.org.trim() || !dataForm.place.trim() || !dataForm.name.trim() || !dataForm.mail.trim() || !dataForm.phone.trim());

    }, [dataForm]);


    return (
        <section className="popup" ref={popupElement} onClick={() => handleClosePopup()} >
            <div className="popupContainer" ref={containerElement} onClick={(e) => e.stopPropagation()}>

                <form noValidate>
                    <h1 className='popupTitle'>Заявка</h1>
                    <fieldset className='listContainer'>
                        <legend>Данные</legend>
                        <ul className='popupList'>
                            <li className='popupListItem'>
                                <label className='listItemTitle' htmlFor="org">Организация:*</label>
                                <input className='popupInput' type="text" name="org" id="org" value={dataForm.org}
                                    onChange={onChange} required />
                            </li>
                            <li className='popupListItem'>
                                <label className='listItemTitle' htmlFor="place">Регион:*</label>
                                <input className='popupInput' type="text" name="place" id="place" value={dataForm.place}
                                    onChange={onChange} required />
                            </li>
                            <li className='popupListItem'>
                                <label className='listItemTitle' htmlFor="name">ФИО:*</label>
                                <input className='popupInput' type="text" name="name" id="name" value={dataForm.name}
                                    onChange={onChange} required />
                            </li>
                            <li className='popupListItem'>
                                <label className='listItemTitle' htmlFor="email">E-mail:*</label>
                                <input className='popupInput' type="email" name="mail" id="email" value={dataForm.mail}
                                    onChange={onChange} required />
                            </li>
                            <li className='popupListItem'>
                                <label className='listItemTitle' htmlFor="number">Телефон:*</label>
                                <input className='popupInput' type="tel" name="phone" id="number" maxLength="21" value={dataForm.phone}
                                    onChange={onChange} required />
                            </li>
                        </ul>
                    </fieldset>

                    <div>
                       {submitDisabled ? (<button className='submitButton submitButton_disabled' disabled >Отправить</button>): (<button className='popupSubmitButton' type="submit" onClick={(e) => handleSubmit(e)}>Отправить</button>) } 
                        <p className='popupCaption'>* — Обязательные поля</p>
                    </div>

                </form>
                <div className='popup__toggle' onClick={() => handleClosePopup()} />
            </div>

        </section>
    )
}

export default Popup;