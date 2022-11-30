import './Popup.css';

const Popup = ({ firstname, lastname, phonenumber, message, role, closePopupHandler }) => {
    return (
        <div className="modal" id="modal">
            <h2>Verify your choice</h2>
            <div className='verify-container'>
                <div className='displayname'>
                    <p>Firstname: {firstname}</p>
                    <p>Lastname: {lastname}</p>
                </div>
                <div className='displayname'>
                    <p>Phone Number: {phonenumber}</p>
                    <p>Role: {role}</p>
                </div>
                <div className='displayname'>
                    <p>Message: {message}</p>
                </div>
            </div>
            <div className='button-container'>
                <button className='closePopup' name="closePopup" onClick={closePopupHandler}>Send</button>
                <button className="cancel" onClick={closePopupHandler}>Cancel</button>
            </div>


        </div>
    )
}

export default Popup;