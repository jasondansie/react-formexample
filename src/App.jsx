import './App.css';
import React, { useState, useEffect } from 'react';
import Popup from './Popup';
import Form from './Form';
import View from './View';
import Footer from './Footer';
import Notes from './Notes';

const App = () => {

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [role, setRole] = useState();
  const [message, setMessage] = useState();
  const [showPopup, setShowPopup] = useState(false);

  useEffect((e) => {
    setFirstname(e.target.firstname);
    setLastname(e.target.lastname);
    setPhonenumber(e.target.phonenumber);
    setRole(e.target.role);
    setMessage(e.target.message);

  }, [])

  const changeHandler = (event) => {

  };

  const submitHandler = (event) => {
    setShowPopup(true);
  };

  const closePopupHandler = (event) => {
    event.preventDefault();
    setShowPopup(false);
    console.log("cancle");
  };


  return (
    <main>
      <div className='form-container'>
        <h1>Control components and working with forms</h1>
        <Form
          changeHandler={changeHandler}
          submit={submitHandler}
        />
      </div>
      <section className='view-container'>
        <View
          firstname={firstname}
          lastname={lastname}
          phonenumber={phonenumber}
          message={message}
          role={role}
        />
      </section>
      <section>
        <Notes />
      </section>
      <section className='popup-container'>
        {showPopup && <Popup
          firstname={firstname}
          lastname={lastname}
          phonenumber={phonenumber}
          message={message}
          role={role}
          closePopup={closePopupHandler}
          cancel={closePopupHandler}
        />}
      </section>
      <Footer />
    </main>
  );
}

export default App;
