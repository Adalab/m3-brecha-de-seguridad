import React, {Component} from "react";
import DataCard from './DataCard';
import PropTypes from 'prop-types';

class DataList extends Component {
  render() {
    const {filteredData} = this.props;
    return (
      <ul className="app__items">
        {filteredData
          .map((item, index) => {
            return (
              <li className="app__item" key={index}>
                <DataCard 
                  item={item}
                />
              </li>
            );
        })}
      </ul>
    );
  }
}

DataList.propTypes = {
  filteredData: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default DataList;