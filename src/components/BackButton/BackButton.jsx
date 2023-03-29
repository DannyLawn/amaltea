import backLogo from '../../images/back.png';
import { closeDivision } from '../../services/slices/divisions-navigation-slice.js';
import { clearAllProducts } from '../../services/slices/products-constructor-slice.js';
import { clearOrderData } from '../../services/slices/order-data-slice';
import { useDispatch } from 'react-redux';
import './BackButton.css';

function BackButton() {

    const dispatch = useDispatch();

    const onClickButton = () => {
        dispatch(closeDivision());
        dispatch(clearAllProducts());
        dispatch(clearOrderData());
        window.scrollTo(0, 0);
    }

    return (
        <button className='BackButton' onClick={()=>onClickButton()}>
            <img src={backLogo} className="backLogo" alt="logo" />
            <p className='backCaption'>Назад</p>
        </button>
    )

}

export default BackButton;