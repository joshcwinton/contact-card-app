// App.js
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

class ContactCard extends Component {
  render() {
    return <div id={this.props.id}>
      <h1> Name: {this.props.name} </h1>
      <p> Cell: {this.props.cellNumber} </p>
      <p> Work: {this.props.workNumber} </p>
      <p> Email: {this.props.email} </p>
    </div>
  }
}

ContactCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  cellNumber: PropTypes.number,
  workNumber: PropTypes.number,
  email: PropTypes.string
};

class App extends Component {
  render() {
    return (<div><ContactCard id="1" name="Josh" cellNumber="3479309800" workNumber="7183788383" email="josh@joshwinton.com"/> <ContactCard id="2" name="Bob" cellNumber="3473664762" workNumber="9178465342" email="bob@mynameisbob.com"/><ContactCard id="3" name="Alice" cellNumber="5169732832" workNumber="2127647382" email="alice@mynameisalice.com"/></div>)
  }
}

export default App;
