import { StyledForm, Input, Btn } from "./Form.styled";
import { Component } from "react";
import { nanoid } from "nanoid";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, number} = this.state;
    const data = {
      id: nanoid(),
      name,
      number,
    };

    this.props.onApp(data)

    this.setState(() => ({
        name: "",
        number: "",
      }));
    
  };

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });

  };
  render() {
    const { name, number } = this.state;

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <Input
          value={name}
          onChange={this.handleChange}
          type="text"
          name="name"

        />
        <label htmlFor="number">Number</label>
        <Input
          value={number}
          onChange={this.handleChange}
          type="number"
          name="number"
          
        />
        <Btn type="submit">Add contact</Btn>
      </StyledForm>
    );
  }
}
export default Form;
