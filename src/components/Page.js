import React from "react";
import Header from './Header';
import DataList from './DataList';
import PropTypes from 'prop-types';
import Filters from './Filters';
import Status from './Status';
import Footer from './Footer';

class Page extends React.Component {
  render() {
    const {data, query, handleInputValue} = this.props;
    const filteredData = data.filter(item => item.email.toUpperCase().includes(query.toUpperCase()));
    return (
      <div className="app">
        <Header />
        <main className="app__main">
          <Filters handleInputValue={handleInputValue} />
          <Status total={filteredData.length} />
          <DataList filteredData={filteredData} />
        </main>
        <Footer />
      </div>
    );
  }
}

Page.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
  handleInputValue: PropTypes.func.isRequired
  
}

export default Page;