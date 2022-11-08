import './form.css';

const Form = (props) => {
    return (
        <div className='form'>
            <div className='form-group'>
                <label htmlFor="firstName">First name</label>
                <input type="text" name='firstName' />
            </div>
            <div className='form-group'>
                <label htmlFor="lastName">Last name</label>
                <input type="text" name='lastName' />
            </div>
            <div className='form-group'>
                <label htmlFor="phoneNumber">Phone number</label>
                <input type="text" name='phoneNumber' />
            </div>
            <div className='form-group'>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </div>
            <div className='form-group'>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name='firstName' />
            </div>
            <button className='submit'></button>
        </div>
    )
}

export default Form;