import React, {Component} from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom'
import Pencil, { TOOL_PENCIL} from './pencil';
import { socket } from '../constants';

export const toolsMap = {
  [TOOL_PENCIL]: Pencil
};

class Whiteboard extends Component {
  tool = null;
  interval = null;

  static defaultProps = {
    width: 500,
    height: 500,
    color: '#000',
    size: 2,
    fillColor: '',
    canvasClassName: 'canvas',
    debounceTime: 1000,
    animate: true,
    tool: TOOL_PENCIL,
    toolsMap
  };

  componentDidMount() {
    this.canvas = findDOMNode(this.canvasRef);
    this.ctx = this.canvas.getContext('2d');
    this.initTool(this.props.tool);
    socket.on('resetCanvas', this.ctx.clearRect(0, 0, 500, 500))
    socket.on('drawer', (data) => {
      // this.setState({drawer: data})
      // console.log(' ',data)
    })
    socket.on('newDrawer', (data) => {
      this.ctx.clearRect(0, 0, 500, 500);
      this.clearCanvas();
    })
    socket.on('clearCanvas', () => {
      this.clearCanvas();
    })
    
  }

  initTool = (tool) => {
    this.tool = this.props.toolsMap[tool](this.ctx);
  }

  onMouseDown = (e) => {
    this.tool.onMouseDown(...this.getCursorPosition(e), this.props.color, this.props.size, this.props.fillColor);
  }

  onMouseMove = (e) => {
    this.tool.onMouseMove(...this.getCursorPosition(e));
  }

  onMouseUp = (e) => {
    this.tool.onMouseUp(...this.getCursorPosition(e));
  }

  getCursorPosition(e) {
    const {top, left} = this.canvas.getBoundingClientRect();
    return [
      e.clientX - left,
      e.clientY - top
    ];
  }

  clearCanvas = () => {
    console.log('Clear canvas');
    // socket.emit('clearDrawing', 0)
    this.ctx.clearRect(0, 0, 500, 500);
  }

  render() {
    const {width, height, canvasClassName} = this.props;
    return (<React.Fragment>
      {(this.props.user.drawer) ?
      <canvas
        ref={(canvas) => { this.canvasRef = canvas; }}
        className={canvasClassName}
        onMouseDown={this.onMouseDown}
        onMouseMove={this.onMouseMove}
        onMouseOut={this.onMouseUp}
        onMouseUp={this.onMouseUp}
        width={width}
        height={height}
      />
      :
      <canvas
        ref={(canvas) => { this.canvasRef = canvas; }}
        className={canvasClassName}
        width={width}
        height={height}
      />
      }
      <button onClick={this.clearCanvas}>Clear</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Whiteboard)