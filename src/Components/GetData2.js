import React from "react";
import Axios from "axios";
import Cross from "@material-ui/icons/Close";
export default class Getdata2 extends React.Component {
  state = {
    results: [],
  };

  componentDidMount() {
    Axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b5a02579e8674700a09deefa6f24af0c`
    ).then((res) => {
      this.setState({ results: res.data.articles });
    });
  }
  render() {
    return (
      <div className="main-display-hori">
        {this.state.results.map((value, key) => (
          <a
            className="link"
            key={key}
            href={value.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="newscard-hori">
              <div className="imagep">
                <img src={value.urlToImage} alt=""></img>
                <span className="title-hori">{value.title}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  }
}
