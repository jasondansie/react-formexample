import './Popup.css';

const Popup = (props) => {
    return (
        <div className="modal" id="modal">
            <h2>Verify your choice</h2>
            <div className='verify-container'>
                <div className='displayname'>
                    <p>Firstname: {props.firstname}</p>
                    <p>Lastname: {props.lastname}</p>
                </div>
                <div className='displayname'>
                    <p>Phone Number: {props.phonenumber}</p>
                    <p>Role: {props.roles}</p>
                </div>
                <div className='displayname'>
                    <p>Message: {props.message}</p>
                </div>
            </div>
            <div className='button-container'>
                <button className='closePopup'name="closePopup" onClick={props.closePopupHandler}>Send</button>
                <button className="cancel" onClick={props.closePopupHandler}>Cancel</button>
            </div>


        </div>
    )
}

export default Popup;