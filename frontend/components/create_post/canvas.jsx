import React from "react";
import { CirclePicker, ChromePicker } from "react-color";
import { hashHistory } from "react-router";

class Canvas extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pixls: new Array(2500).fill("#f7f7f7"),
      brushColor: "#000000",
      selectedColor: "#000000",
      brushToolEnabled: true,
      eraserToolEnabled: false,
      paintBucket: false,
      fullColorPickerEnabled: false,
      backgroundColor: "#f7f7f7",
      pixlClass: "gridlines-on",
      description: ""
    };

    // this.brushEnabled = false;

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.setBrushColor = this.setBrushColor.bind(this);
    // this.enableBrush = this.enableBrush.bind(this);
    // this.disableBrush = this.disableBrush.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleFullColorPicker = this.toggleFullColorPicker.bind(this);
    this.setBackgroundColor = this.setBackgroundColor.bind(this);
    this.closeColorPicker = this.closeColorPicker.bind(this);
    this.toggleGridlines = this.toggleGridlines.bind(this);
    this.enableBrushTool = this.enableBrushTool.bind(this);
    this.enableEraserTool = this.enableEraserTool.bind(this);
    this.togglePaintBucketTool = this.togglePaintBucketTool.bind(this);
    this.paintBucket = this.paintBucket.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.easelClass = this.easelClass.bind(this);

  }

  handleMouseDown(e) {

    if (e.buttons === 1) {
      const idx = e.currentTarget.id;
      let newPixls = this.state.pixls.slice();
      newPixls[idx] = this.state.brushColor;
      this.setState({ pixls: newPixls });
    }
  }

  handleClick(e) {
    const idx = e.currentTarget.id;
    let newPixls = this.state.pixls.slice();
    if (this.state.paintBucket) {
      this.paintBucket(idx, newPixls);
    } else {
      newPixls[idx] = this.state.brushColor;
      this.setState({ pixls: newPixls });
    }
  }

  setBrushColor(color) {
    this.setState({
      brushColor: color.hex,
      eraserToolEnabled: false
    });
  }

  // enableBrush() {
  //   this.brushEnabled = true;
  // }
  //
  // disableBrush() {
  //   this.brushEnabled = false;
  // }

  renderPixls() {
    const allCells = [];
    for (let i = 0; i < 2500; i++) {
      allCells.push(<li
        className={`pixl ${this.state.pixlClass}`}
        key={i}
        value={i}
        id={i}
        style={{backgroundColor: `${this.state.pixls[i]}`}}
        onMouseOver={this.handleMouseDown}
        onClick={this.handleClick}></li>)
    }
    return allCells;
  }

  toggleFullColorPicker() {
    this.setState({fullColorPickerEnabled: !this.state.fullColorPickerEnabled})
  }

  closeColorPicker() {
    this.setState({ fullColorPickerEnabled: false })
  }

  setBackgroundColor() {
    let newPixls = this.state.pixls.map(pixl => {
      if (pixl === this.state.backgroundColor) {
        return this.state.brushColor;
      } else {
        return pixl;
      }
    });
    this.setState({pixls: newPixls, backgroundColor: this.state.brushColor});
  }

  toggleGridlines() {
    if (this.state.pixlClass === "gridlines-on") {
      this.setState({pixlClass: "gridlines-off"})
    } else {
      this.setState({pixlClass: "gridlines-on"})
    }
  }

  enableEraserTool() {
    this.setState({
      brushColor: this.state.backgroundColor,
      eraserToolEnabled: true,
      brushToolEnabled: false,
      paintBucket: false,
      selectedColor: this.state.brushColor
    })
  }

  enableBrushTool() {
    this.setState({
      brushColor: this.state.selectedColor,
      paintBucket: false,
      eraserToolEnabled: false,
      brushToolEnabled: true
    })
  }

  togglePaintBucketTool() {
    this.setState({
      brushColor: this.state.selectedColor,
      eraserToolEnabled: false,
      brushToolEnabled: false,
      paintBucket: true
    })
  }

  easelClass() {
    if (this.state.brushToolEnabled) {
      return "easel group brush-tool";
    } else if (this.state.eraserToolEnabled) {
      return "easel group eraser-tool";
    } else if (this.state.paintBucket) {
      return "easel group bucket-tool";
    }
  }

  paintBucket(idx, pixls) {

    idx = parseInt(idx);
    function paint(idx, pixls, brushColor) {
      const oldColor = pixls[idx];
      pixls[idx] = brushColor;

      if (pixls[idx + 1] === oldColor) {
        pixls = paint(idx + 1, pixls, brushColor);
      }
      if (pixls[idx - 1] === oldColor) {
        pixls = paint(idx - 1, pixls, brushColor);
      }
      if (pixls[idx - 50] === oldColor) {
        pixls = paint(idx - 50, pixls, brushColor);
      }
      if (pixls[idx + 50] === oldColor) {
        pixls = paint(idx + 50, pixls, brushColor);
      }
      return pixls;
    }
    paint(idx, pixls, this.state.brushColor)
    this.setState({pixls});

  }

  setDescription() {
    return e => this.setState({description: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = {
      drawing: this.state.pixls,
      description: this.state.description
    };
    this.props.createPost({post});
    hashHistory.push("/")
  }

  render() {
    return (
      <section className={this.easelClass()}>

        <ul className={`canvas group new-post ${this.state.pixlClass}`}>
          {this.renderPixls()}
        </ul>

        <div className="palette">
          <CirclePicker
            style={{width: "100%"}}
            color={this.state.brushColor}
            onChangeComplete={this.setBrushColor}
            />

          <ul className="canvas-buttons">
            <li style={{backgroundColor: this.state.brushColor}}
              className="canvas-button"
              onClick={this.toggleFullColorPicker}>
                More Colors</li>
              { this.state.fullColorPickerEnabled ?
                <div className="popover">
                <div className="cover" onClick={this.closeColorPicker}></div>
                  <ChromePicker
                    color={this.state.brushColor}
                    onChangeComplete={this.setBrushColor}/>
                </div> : null }
              <li className="canvas-button" onClick={this.setBackgroundColor}>
                Set background
              </li>
              <li className="canvas-button" onClick={this.toggleGridlines}>
                Toggle Gridlines
              </li>
              <li className="canvas-button" onClick={this.enableEraserTool}>Eraser</li>
              <li className="canvas-button" onClick={this.enableBrushTool}>Brush</li>
              <li className="canvas-button" onClick={this.togglePaintBucketTool}>Paint Bucket</li>
          </ul>

          <form onSubmit={this.handleSubmit} className="new-post-submit-form">
            <input
              type="text"
              className="new-post-input"
              placeholder="Caption..."
              onChange={this.setDescription()}></input>
            <input type="submit"
              className="canvas-button share-pixls"
              value="Share Pixls"></input>
          </form>

        </div>
      </section>
    )
  }
}

export default Canvas;