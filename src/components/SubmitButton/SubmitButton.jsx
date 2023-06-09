import { useMemo } from 'react';
import { openPopup } from '../../services/slices/divisions-navigation-slice';
import { addProducts, clearError } from '../../services/slices/order-data-slice';
import { useSelector, useDispatch } from 'react-redux';

import './SubmitButton.css';




function SubmitButton() {

    const dispatch = useDispatch();
    const { allProducts } = useSelector(store => store.productsConstructor);

    const addedProducts = useMemo(() => {
        return allProducts.filter(product => product.count > 0);
    }, [allProducts]);
/*
    const validity = useMemo( () => {
        return addedProducts.length > 0 ? true : false;
    },[addedProducts]);
*/
    const validity = useMemo(() => {
        return addedProducts.reduce((summ, product) => summ += product.price, 0)
    }, [addedProducts]);



     //попап
     const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(clearError());
        dispatch(addProducts(addedProducts));
        dispatch(openPopup());
    }


    return (
        validity ? (<button className='submitButton' onClick={(e)=> handleSubmit(e)}>Оставить заявку</button>) : (<button className='submitButton submitButton_disabled' disabled >Оставить заявку</button>)
    );
}


export default SubmitButton;