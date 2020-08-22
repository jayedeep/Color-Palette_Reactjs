import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import { withStyles } from "@material-ui/styles";
import "./Palette.css";
import PaletteFooter from "./PaletteFooter";
import styles from "./styles/PaletteStyles";

class Palette extends Component {
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
    const { classes } = this.props;
    const colorBoxes = this.props.palette.colors[this.state.level].map(
      (color) => (
        <ColorBox
          background={color[this.state.format]}
          name={color.name}
          key={color.id}
          // id={color.id}
          // paletteId={this.props.palette.id}
          moreUrl={`/palette/${this.props.palette.id}/${color.id}`}
          showingFullPalette
        />
      )
    );
    return (
      <div className={classes.Palette}>
        {/* Navbar goes here */}
        <Navbar
          level={this.state.level}
          changeLevel={this.changeLevel}
          handleChange={this.handleChange}
          showingAllColors
        />
        <div className={classes.colors}>
          {colorBoxes}
          {/*bunch of colors*/}
        </div>
        {/* footer eventually */}
        <PaletteFooter
          paletteName={this.props.palette.paletteName}
          emoji={this.props.palette.emoji}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
