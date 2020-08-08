import Stage from '../common/stage/Stage';

export default class LineChart {
  constructor(props) {
    this.element = props.element;
    this.height = props.height || 250;

    this.init = this.init.bind(this);
    this.render = this.render.bind(this);
    this.destroy = this.destroy.bind(this);
  }

  init() {
    this.element.classList.add('webgl-charts-line-chart');

    this.stage = new Stage({
      element: this.element,
      height: this.height,
      onResize: this.render,
    });
    this.stage.init();

    this.render();
  }

  render() {
    const gl = this.stage.getRenderingContext();

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  }

  destroy() {
    this.stage.destroy();
  }
}
