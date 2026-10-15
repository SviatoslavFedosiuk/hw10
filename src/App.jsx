import "./App.css";
import Title from "./components/Title/Title";
import Form from "./components/Form/Form";
import SecondTitle from "./components/SecondTitle/SecondTitle";
import Filter from "./components/Filter/Filter";
import ResultList from "./components/ResultList/ResultList";
import { Component } from "react";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  
  handleDelete = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((todo) => todo.id !== id),
    }));
  };
  handleApp = (data) => {
  const isDuplicate = this.handleMistake(data.name);

  if (isDuplicate) {
    return;
  }

  this.setState((prevState) => ({
    contacts: [...prevState.contacts, data],
  }));
};
  handleFilter = (evt)=>{
    const {name, value} = evt.target;
    this.setState({
      [name]: value,
    })
  }
  handleMistake = (name) => {
  const { contacts } = this.state;

  const error = contacts.some(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );

  if (error) {
    alert("Mistake: This contact already exists!");
    return true;
  }

  return false;
};
  render() {
    return (
      <>
        <Title />
        <Form onApp={this.handleApp} />
        <SecondTitle />
        <Filter filter={this.state.filter} onFilterChange={this.handleFilter}/>
        <ResultList contacts={this.state.contacts} filter={this.state.filter}  onDelete={this.handleDelete}/>
      </>
    );
  }
}
export default App;
