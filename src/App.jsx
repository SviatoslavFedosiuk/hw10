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
  handleApp = (data) => {
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
  render() {
    return (
      <>
        <Title />
        <Form onApp={this.handleApp} />
        <SecondTitle />
        <Filter filter={this.state.filter} onFilterChange={this.handleFilter}/>
        <ResultList contacts={this.state.contacts} filter={this.state.filter} />
      </>
    );
  }
}
export default App;
