import React from "react";
import Axios from "axios";

export default class Getdata extends React.Component {
  state = {
    results: [],
  };

  componentDidMount() {
    Axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b5a02579e8674700a09deefa6f24af0c`
    ).then((res) => {
      this.setState({ results: res.data.articles });
    });
    Axios.get(
      `https://gnews.io/api/v4/search?q=elon&token=d78fe8421b6b496a647626514325d3a6`
    ).then((res) => {
      console.log(res, "PPAP");
    });
  }
  render() {
    return (
      <div className="main-display">
        {this.state.results.map((value, key) => (
          <a key={key} href={value.url} target="_blank" rel="noreferrer">
            <div className="newscard">
              <div className="title">{value.title}</div>
              <div className="author">
                <span>Source: {value.source.name}</span>
                <span className="date">{value.publishedAt}</span>
              </div>
              <br></br>
              <div className="imagep">
                <img src={value.urlToImage} alt=""></img>
              </div>
              <br></br>
              <div className="summary">{value.content}</div>
            </div>
          </a>
        ))}
      </div>
    );
  }
}
