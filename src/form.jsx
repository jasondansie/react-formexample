import './Form.css';

const Form = (props) => {
    return (
        <form className='form' onSubmit={props.submit}>
            <div className='form-group'>
                <label htmlFor="firstName" name="firstname">First name</label>
                <input type="text" name='firstname' value={props.firstname} onChange={props.changeHandler} />
            </div>
            <div className='form-group'>
                <label htmlFor="lastname">Last name</label>
                <input type="text" name='lastname' value={props.lastname} onChange={props.changeHandler} />
            </div>
            <div className='form-group'>
                <label htmlFor="phonenumber">Phone number</label>
                <input type="text" name='phonenumber' value={props.phonenumber} onChange={props.changeHandler} />
            </div>
            <div className='form-group'>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="15" rows="3" value={props.messsage} onChange={props.changeHandler} ></textarea>
            </div>
            <div className='form-group'>
                <label htmlFor="roles">Roles</label>
                <select name="roles" id="roles" value={props.roles} onChange={props.changeHandler} >
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                    <option value="Employee">Employee</option>
                </select>
            </div>
            <button className='submit'>Send</button>
        </form>
    )
}

export default Form;