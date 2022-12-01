import './App.css';
import React, { useState } from 'react';
import Popup from './Popup';
import Form from './Form';
import View from './View';
import Footer from './Footer';
import Notes from './Notes';
import axios from 'axios';

const App = () => {
  const [notes, setNote] = useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
    role: '',
    message: ''
  })

  const [showPopup, setShowPopup] = useState(false);

  const changeHandler = (e) => {

    setNote({
      ...notes,
      [e.target.name]: e.target.value
    })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const postHandler = () => {
    axios
      .post("http://localhost:3050/notes", notes)
      .then((res) => console.log(res))
      .catch((error) => console.log(error))

    setShowPopup(false);

    setNote({
      ...notes,
      firstname: '',
      lastname: '',
      phonenumber: '',
      role: '',
      message: ''
    })
  }

  const closePopupHandler = (e) => {

    setNote({
      ...notes,
      firstname: '',
      lastname: '',
      phonenumber: '',
      role: '',
      message: ''
    })
    console.log("cancel");
    setShowPopup(false);
  };

  return (
    <main>
      <div className='form-container'>
        <h1>Control components and working with forms</h1>
        <Form
          {...notes}
          changeHandler={changeHandler}
          submit={submitHandler}
        />
      </div>
      <section className='view-container'>
        <View
          {...notes}
        />
      </section>
      <section>
        <Notes />
      </section>
      <section className='popup-container'>
        {showPopup && <Popup
          {...notes}
          sendInfo={postHandler}
          cancel={closePopupHandler}
        />}
      </section>
      <Footer />
    </main>
  );
}

export default App;
