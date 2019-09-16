import React, {Component} from "react";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '00:00:00'
    }
  }

  componentDidMount() {
    setInterval(()=>{
      this.getTime();
    }, 1000);
    
  }

  getTime(){
    const now = new Date();

    const hh = now.getHours();
    const mm = now.getMinutes();
    const ss = now.getSeconds();
    
    this.setState({
      time: `${hh}:${mm}:${ss}`
    })
  }

  render() {
    return (
      <footer className="app__footer">
        <p className="app__time">loh(); - {this.state.time}</p>
      </footer>
    );
  }
}

export default Footer;