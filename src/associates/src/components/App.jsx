import React from "react";
import axios from "axios";
import keys from "../keys.js";
import Counter from "./counter/Counter.jsx";
import Search from "./search/Search.jsx";
import NameTabs from "./nameTabs/NameTabs.jsx";
import "./app.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    let names = [];
    axios
      .get(
        `https://cdn.contentful.com/spaces/${keys.space}/entries?access_token=${
          keys.accessToken
        }&limit=1000&order=sys.id`
      )
      .then(response => {
        response.data.items.forEach(person => {
          names.push(person.fields);
        });

        this.setState({
          names,
          total: response.data.total
        });

        const loops = Math.ceil(response.data.total / 1000);
        let skip = 0;
        for (let i = 0; i < loops; i++) {
          skip += 1000;
          axios
            .get(
              `https://cdn.contentful.com/spaces/${
                keys.space
              }/entries?access_token=${
                keys.accessToken
              }&limit=1000&skip=${skip}&order=sys.id`
            )
            .then(response => {
              let newNames = [];
              response.data.items.forEach(person => {
                newNames.push(person.fields);
              });
              let totalNames = this.state.names.concat(newNames);
              this.setState({
                names: totalNames
              });
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <main>
        <header>
          <div id="associates--top-of-page" name="top" />
          <Counter
            className="counter"
            count={this.state.names ? this.state.names.length : 0}
          />
          <Search className="search" names={this.state.names} />
        </header>
        {this.state.names && this.state.names.length === this.state.total && (
          <NameTabs names={this.state.names} />
        )}
      </main>
    );
  }
}

export default App;
