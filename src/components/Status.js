import React, {Component} from "react";
import PropTypes from 'prop-types';

class Status extends Component {
  render() {
    return (
      <p>{this.props.total === 1 ? 'Hay 1 resultado':`Hay ${this.props.total} resultados`} </p>
    );
  }
}

Status.propTypes = {
  total: PropTypes.number.isRequired
};

export default Status;