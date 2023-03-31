import { closePopup } from '../../services/slices/divisions-navigation-slice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useRef, useState, useEffect, useMemo } from 'react';
import { closeDivision } from '../../services/slices/divisions-navigation-slice.js';
import { clearAllProducts } from '../../services/slices/products-constructor-slice.js';
import { successfulSending, failedSending, updateMessage, sendRequest, clearError  } from '../../services/slices/order-data-slice';
import MessageBoard from '../MessageBoard/MessageBoard.jsx';
import emailjs from '@emailjs/browser';
import React from 'react';
import './Popup.css';

const Popup = () => {

    const dispatch = useDispatch();

    const { openedPopup } = useSelector(store => store.divisionsNavigation);
    const { sendingAnApplication} = useSelector(store => store.orderData);
    const { orderedProducts, sendingRequest } = useSelector(store => store.orderData);
    const popupElement = useRef(null);
    const containerElement = useRef(null);
    const form = useRef(null);


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


    useEffect(() => {
        setSubmitDisabled(!dataForm.org.trim() || !dataForm.place.trim() || !dataForm.name.trim() || !dataForm.mail.trim() || !dataForm.phone.trim());

    }, [dataForm]);


    const orderData = useMemo(() => {
        return orderedProducts.reduce((dataStr, current) => {
            return dataStr + `${current.name} Количество: ${current.count.toString()}, Цена за штуку: ${current.price.toString()}${current.option === undefined ? '' : `, Комплектация: ${current.option === "local" ? "Локальная версия" : current.option === "network" ? "Сетевая версия на 6 рабочих мест" : "Сетевая версия «без ограничений»"}`}; \n \n`
        }, ``)

    }, [orderedProducts]);

    const totalPrice = useMemo(() => {
        return orderedProducts.reduce((summ, item) => summ += item.price * item.count, 0).toString() + ' ₽';

    }, [orderedProducts]);


    const sendEmail = (e) => {
        e.preventDefault();

        dispatch(clearError());
        dispatch(sendRequest());

        emailjs.sendForm('service_ocxcw7m', 'template_tkdr3cy', form.current, 'ggVhu4GbHdpVSB3AE')
            .then((result) => {

                dispatch(closeDivision());
                dispatch(clearAllProducts());
                handleClosePopup();  
                dispatch(successfulSending());
                dispatch(updateMessage('Заявка отправлена!')); 
                window.scrollTo(0, 0);             

            }, (error) => {
                dispatch(failedSending());
                dispatch(updateMessage(`Ошибка: ${error.status}. Пожалуйста, попробуйте позже`)); 
            });

    };


    return (
        <section className="popup" ref={popupElement} onClick={() => handleClosePopup()} >
            <div className="popupContainer" ref={containerElement} onClick={(e) => e.stopPropagation()}>

                <form ref={form} onSubmit={sendEmail} noValidate>
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

                    <input type="hidden" name="data" value={orderData} />
                    <input type="hidden" name="totalPrice" value={totalPrice} />

                    <div>
                        {submitDisabled ? (<button className='popupSubmitButton popupSubmitButton_disabled' disabled >Отправить</button>) : (sendingRequest ? (<p className='requestLoading'>Обработка данных</p>) : (<button className='popupSubmitButton' type="submit" >Отправить</button>))}
                        <p className='popupCaption'>* — Обязательные поля</p>
                    </div>

                </form>
                <div className='popup__toggle' onClick={() => handleClosePopup()} />
                
            </div>
            {sendingAnApplication === false && <MessageBoard /> }

        </section>
    )
}

export default Popup;