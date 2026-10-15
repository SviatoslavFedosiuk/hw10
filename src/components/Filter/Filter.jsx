import { Component } from "react";
import { Box, Input  } from "./Filter.styled";

class Filter extends Component {
  render() {
    const { filter, onFilterChange } = this.props;

    return (
      <Box>
        <label htmlFor="filter">Find contacts by name</label>
        <Input
          id="filter"
          type="text"
          name="filter"
          value={filter}
          onChange={onFilterChange}
        />
      </Box>
    );
  }
}

export default Filter;