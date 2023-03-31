import { Component } from "react";
import "./search-box.css";

export class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className={`search-box ${this.props.className}`}
          type="search"
          placeholder={this.props.placeHolder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}
