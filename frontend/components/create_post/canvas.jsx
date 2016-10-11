import React from "react";
import { GithubPicker, SketchPicker, CirclePicker } from "react-color";

class Canvas extends React.Component {
  constructor() {
    super();
    this.state = {
      pixls: new Array(2500).fill("#f7f7f7"),
      brushColor: "#000000"
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.setBrushColor = this.setBrushColor.bind(this);
  }

  handleMouseDown(e) {
    // debugger
    const idx = e.currentTarget.id;
    let newPixls = this.state.pixls.slice();
    newPixls[idx] = this.state.brushColor;
    this.setState({ pixls: newPixls });
  }

  setBrushColor(color) {
    this.setState({ brushColor: color.hex });
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
        onMouseEnter={this.handleMouseDown}></div>)
    }
    return allCells;
  }

  render() {

    return (
      <section className="easel group">
        <section className="canvas group">
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
