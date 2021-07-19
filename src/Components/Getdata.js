import React from "react";
import Axios from "axios";

var Func = "trending";
export default class Getdata extends React.Component {
  state = {
    results: [],
  };

  componentDidMount() {
    Axios.get(
      `https://bing-news-search1.p.rapidapi.com/news/search?q=${Func}&rapidapi-key=b388adc471msh65e8cd88ea66e29p1557f7jsnfa0be9110ed2`
    ).then((res) => {
      this.setState({ results: res.data.value });
      console.log(this.state.results);
    });
  }
  render() {
    return (
      <span className="outer-div">
        <input
          onChange={(e) => {
            Func = e.target.value;
            console.log(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            Axios.get(
              `https://bing-news-search1.p.rapidapi.com/news/search?q=${Func}&rapidapi-key=b388adc471msh65e8cd88ea66e29p1557f7jsnfa0be9110ed2`
            ).then((res) => {
              console.log(res.data.value);
              this.setState({ results: res.data.value });
            });
          }}
        >
          Button
        </button>
        <div className="main-display">
          {this.state.results.map((value, key) => (
            <a key={key} href={value.url} target="_blank" rel="noreferrer">
              <div className="newscard">
                <div className="title">{value.name}</div>
                <div className="author">
                  <span>Source: {value.provider[0].name}</span>
                  <span className="date">
                    Published:
                    {value.datePublished.toString().slice(0, 10)}
                  </span>
                </div>
                <br></br>
                <div className="imagep">
                  <img
                    src={value.image ? value.image.thumbnail.contentUrl : ""}
                    alt="Noimagetodisplay"
                  ></img>
                </div>
                <br></br>
                <div className="summary">{value.content}</div>
              </div>
            </a>
          ))}
        </div>
      </span>
    );
  }
}
