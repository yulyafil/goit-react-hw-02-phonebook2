import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class Form extends Component {
  state = {
    name: '',
    phone: '',
  };
  nameInputId = uuidv4();

  handleAddContact = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', phone: '' });
  };

  render() {
    // const { name, phone } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleAddContact}
              id={this.nameInputId}
            />
          </label>
          <br />

          <label htmlFor={this.nameInputId}>
            Phone
            <br />
            <input
              type="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.handleAddContact}
              id={this.nameInputId}
            />
          </label>
          <br />

          <button type="submit">Add contact</button>
        </form>

        {/* <p>{this.state}</p> */}
      </>
    );
  }
}

export default Form;
