import './View.css';

const Inputcheck = (props) => {
    return (
        <div className='inputcheck-container'>
            <h3>First name: {props.firstname}</h3>
            <h3>Last name: {props.lastname}</h3>
            <h3>Phone Number: {props.phonenumber}</h3>
            <h3>Message: {props.message}</h3>
            <h3>Role: {props.roles}</h3>
        </div>
    )
}

export default Inputcheck;
