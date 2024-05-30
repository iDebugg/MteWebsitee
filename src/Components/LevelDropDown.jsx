import React from "react";

React


class Dropdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedValue: '' // Initialize selected value
      };
    }
  
    // Function to handle change in dropdown selection
    handleChange = (event) => {
      this.setState({ selectedValue: event.target.value });
    }
  
    render() {
      return (
        <div className="dropdown-container">
          <h3 className="dropdown-label">Level</h3>
          <div className="dropdown-wrapper">
            <select 
              value={this.state.selectedValue}
              onChange={this.handleChange}
              className="dropdown-select" // Apply CSS class
            >
              
              <option value="item1">100 level</option>
              <option value="item2">200 level</option>
              <option value="item3">300 level</option>
              <option value="item4">400 level</option>
              <option value="item5">500 level</option>
            </select>
            
          </div>
          {/* <p className="selected-item">Selected Item: {this.state.selectedValue}</p> */}
        </div>
      );
    }
  }
  
  export default Dropdown;