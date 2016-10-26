import React from "react";

class Canvas extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.updateCanvas(this.props.drawing);
  }

  updateCanvas(drawing) {

    if (drawing) {
      const ctx = this.refs.canvas.getContext('2d');
      let x, y;

      for (let i = 0; i < drawing.length; i++) {
        x = (i % 50) * 14;
        y = Math.floor(i / 50) * 14;
        ctx.fillStyle = drawing[i];
        ctx.fillRect(x, y, 14, 14)
      }
    }
  }

  render() {

    return (
        <canvas ref="canvas" width={700} height={700}></canvas>
    )
  }
}


export default Canvas;
