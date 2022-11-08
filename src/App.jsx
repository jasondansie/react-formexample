import './App.css';
import { Component } from 'react';
import Form from './form';

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
  };

  render() {
    return (
      <div className='form-container'>
        <h1>Control components and working with forms</h1>
        <Form>

        </Form>
      </div>
    );
  }
}

export default App;
