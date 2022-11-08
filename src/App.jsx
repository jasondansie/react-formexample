import './App.css';
import { Component } from 'react';
import Popup from './Popup';
import Form from './Form';
import View from './View';
import Footer from './Footer';

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    message: "",
    roles: "",
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <main>
        <div className='form-container'>
          <h1>Control components and working with forms</h1>
          <Form
            changeHandler={this.changeHandler}
          />
        </div>
        <section className='view-container'>
          <View
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            phonenumber={this.state.phonenumber}
            message={this.state.message}
            roles={this.state.roles}
          />
        </section>
        <section className='popup-container'>
          <Popup
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            phonenumber={this.state.phonenumber}
            message={this.state.message}
            roles={this.state.roles}
          />
        </section>
        <Footer />
      </main>
    );
  }
}

export default App;
