import React, { Component } from "react";
import "./PaletteFooter.css";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteFooterStyle";

class PaletteFooter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { paletteName, emoji, classes } = this.props;
    return (
      <div>
        <footer className={classes.Palettefooter}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </footer>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteFooter);
