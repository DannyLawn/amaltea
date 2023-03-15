import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import './SubmitButton.css';




function SubmitButton() {

    const { allProducts } = useSelector(store => store.productsConstructor);

    const addedProducts = useMemo(() => {
        return allProducts.filter(product => product.count > 0);
    }, [allProducts]);

    const validity = useMemo( () => {
        return addedProducts.length > 0 ? true : false;
    },[addedProducts]);



    return (
        validity ? (<button className='submitButton'>Оставить заявку</button>) : (<button className='submitButton submitButton_disabled' disabled >Оставить заявку</button>)
    );
}


export default SubmitButton;