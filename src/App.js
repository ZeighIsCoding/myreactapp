import React from "react";
import './App.css';
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            items: json,
            DataisLoaded: true,
        });
      });
    }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
        return (
            <div>
              <h1> Please wait some time... </h1>
            </div>
          );
          
        return (
            <div className="App">
              <h1 className="geeks">G4G</h1>
            </div>
        )

  }






}



export default App;
