import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";
export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  handleChange(val) {
    this.setState({ format: val });
  }

  render() {
    const colorBoxes = this.props.palette.colors[
      this.state.level
    ].map((color) => (
      <ColorBox
        background={color[this.state.format]}
        name={color.name}
        key={color.id}
      />
    ));
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <Navbar
          level={this.state.level}
          changeLevel={this.changeLevel}
          handleChange={this.handleChange}
        />
        <div className="Palette-colors">
          {colorBoxes}
          {/*bunch of colors*/}
        </div>
        {/* footer eventually */}
        <footer className="Palette-footer">
          {this.props.palette.paletteName}
        </footer>
        <span className="emoji">{this.props.palette.emoji}</span>
      </div>
    );
  }
}
