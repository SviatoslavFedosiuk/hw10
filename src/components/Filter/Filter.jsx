import { Component } from "react";
import {  } from "./Filter.styled";

class Filter extends Component {
  render() {
    const { filter, onFilterChange } = this.props;

    return (
      <div>
        <label htmlFor="filter">Find contacts by name</label>
        <input
          id="filter"
          type="text"
          name="filter"
          value={filter}
          onChange={onFilterChange}
        />
      </div>
    );
  }
}

export default Filter;