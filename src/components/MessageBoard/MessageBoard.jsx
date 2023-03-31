import { useSelector } from "react-redux";
import './MessageBoard.css';

const MessageBoard = () => {

    const { boardMessage, sendingAnApplication } = useSelector(store => store.orderData);

    return (
        <>
        { sendingAnApplication ? (
             <div className="messageBoard">
             <p className="messageBoardText">{boardMessage}</p>
         </div>
        ) : (<div className="messageBoard messageBoard_error">
        <p className="messageBoardText">{boardMessage}</p>
    </div>)}
        </>
       )
}

export default MessageBoard;