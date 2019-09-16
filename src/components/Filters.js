import React, {Component} from "react";
import PropTypes from 'prop-types';

class Filters extends Component {
  render() {
    const {handleInputValue} = this.props;
    return (
      <input type="text" onChange={handleInputValue}/>
    );
  }
}

Filters.propTypes = {
  handleInputValue: PropTypes.func.isRequired
}

export default Filters;