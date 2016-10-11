import React from "react";
import { GithubPicker, SketchPicker, CirclePicker } from "react-color";

class Canvas extends React.Component {
  constructor() {
    super();
    this.state = {
      pixls: new Array(2500).fill("#f7f7f7"),
      brushColor: "#000000",
      brushEnabled: false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.setBrushColor = this.setBrushColor.bind(this);
    // this.toggleBrush = this.toggleBrush.bind(this);
    this.enableBrush = this.enableBrush.bind(this);
    this.disableBrush = this.disableBrush.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouseDown(e) {
    if (this.state.brushEnabled) {
      const idx = e.currentTarget.id;
      let newPixls = this.state.pixls.slice();
      newPixls[idx] = this.state.brushColor;
      this.setState({ pixls: newPixls });
    }
  }

  handleClick(e) {
    const idx = e.currentTarget.id;
    let newPixls = this.state.pixls.slice();
    newPixls[idx] = this.state.brushColor;
    this.setState({ pixls: newPixls });
  }

  setBrushColor(color) {
    this.setState({ brushColor: color.hex });
  }

  enableBrush() {
    this.setState({ brushEnabled: true });
  }

  disableBrush() {
    this.setState({ brushEnabled: false })
  }

  renderPixls() {
    const allCells = [];
    for (let i = 0; i < 2500; i++) {
      allCells.push(<div
        className="pixl"
        key={i}
        value={i}
        id={i}
        style={{backgroundColor: `${this.state.pixls[i]}`}}
        onMouseOver={this.handleMouseDown}
        onClick={this.handleClick}></div>)
    }
    return allCells;
  }

  render() {

    return (
      <section className="easel group">
        <section
          className="canvas group"
          onMouseDown={this.enableBrush}
          onMouseUp={this.disableBrush}>
          {this.renderPixls()}
        </section>
        <div className="palette">
          <CirclePicker
            style={{width: "100%"}}
            color={this.state.brushColor}
            onChangeComplete={this.setBrushColor}
            />
        </div>
      </section>
    )
  }
}

export default Canvas;
