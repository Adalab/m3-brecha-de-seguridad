import React, {Component} from "react";
import PropTypes from 'prop-types';

class DataCard extends Component {
  render() {
    const {item} = this.props;
    return (
      <div className="card">
        <h2 className="card__name">{item.name}</h2>
        <div className="card__email">{item.email}</div>
        <ul className="card__passwords">
          {item.passwords.map((pass, i) => {
            return (
              <li className="card__password" key={i}>{pass}</li>
            );
          })}
        </ul>
        <div className="card__iban">{item.bank.iban}</div>
        <div className="card__pin">{item.bank.pin}</div>
      </div>
    );
  }
}

DataCard.propTypes = {
  item: PropTypes.object.isRequired
}

export default DataCard;