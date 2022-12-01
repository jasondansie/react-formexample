import './View.css';

const Inputcheck = ({ firstname, lastname, phonenumber, message, role }) => {
    return (
        <div className='inputcheck-container'>
            <h3>First name: {firstname}</h3>
            <h3>Last name: {lastname}</h3>
            <h3>Phone Number: {phonenumber}</h3>
            <h3>Message: {message}</h3>
            <h3>Role: {role}</h3>
        </div>
    )
}

export default Inputcheck;
