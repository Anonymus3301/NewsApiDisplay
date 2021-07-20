import React from "react";
import Axios from "axios";

var Func = "trending";
export default class Getdata2 extends React.Component {
  state = {
    results: [],
  };

  componentDidMount() {
    Axios.get(
      `https://bing-news-search1.p.rapidapi.com/news/search?q=${Func}&rapidapi-key=b388adc471msh65e8cd88ea66e29p1557f7jsnfa0be9110ed2`
    ).then((res) => {
      this.setState({ results: res.data.value });
    });
  }
  render() {
    return (
      <span>
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
                  <img
                    src={value.image ? value.image.thumbnail.contentUrl : ""}
                    alt="Noimagetodisplay"
                  ></img>
                  <span className="title-hori">{value.name}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </span>
    );
  }
}
