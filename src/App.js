import React from 'react';
import Page from './components/Page';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      data: []
    };

    this.handleInputValue = this.handleInputValue.bind(this);
  }

  componentDidMount() {
    const endpoint = 'https://raw.githubusercontent.com/Adalab/m3-tutoria-2/master/assets/data/bulk.json';

    fetch(endpoint)
      .then(res => res.json())
      .then(results => {
        this.setState({
          data: results.data
        })
      });
  }

  handleInputValue(event) {
    const value = event.currentTarget.value;

    this.setState({
      query: value
    });
  }

  render() {
    const {data, query} = this.state;
    return (
      <Page data={data} query={query} handleInputValue={this.handleInputValue} />
    );
  }
}

export default App;
