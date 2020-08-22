import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteStyles";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", level: 500 };
    this.handleChange = this.handleChange.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
  }
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  handleChange(val) {
    this.setState({ format: val });
  }

  render() {
    const { format } = this.state;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    const { classes } = this.props;
    console.log(this.props.palette);
    return (
      <div className={classes.Palette}>
        <Navbar
          level={this.state.level}
          changeLevel={this.changeLevel}
          handleChange={this.handleChange}
          showingFullPalette={false}
        />
        <div className={classes.colors}>
          {colorBoxes}
          {/* <div className={classes.goBack}> */}
          <div className={classes.goBack}>
            <Link
              to={`/palette/${this.props.palette.id}`}
              className={classes.anchor}
            >
              Go Back
            </Link>
          </div>
        </div>
        <PaletteFooter
          paletteName={this.props.palette.paletteName}
          emoji={this.props.palette.emoji}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
