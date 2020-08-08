export default class Stage {
  constructor(props) {
    this.element = props.element;
    this.height = props.height || 250;
    this.onResize = props.onResize || (() => {});

    this.init = this.init.bind(this);
    this.resize = this.resize.bind(this);
    this.destroy = this.destroy.bind(this);
  }

  init() {
    this.width = this.element.clientWidth;

    this.canvas = document.createElement('canvas');
    this.canvas.classList.add('webgl-charts-stage');
    this.canvas.setAttribute('height', this.height);
    this.canvas.setAttribute('width', this.width);

    this.gl = this.canvas.getContext('webgl');

    this.element.appendChild(this.canvas);

    window.addEventListener('resize', this.resize);
  }

  resize() {
    this.width = this.element.clientWidth;
    this.canvas.setAttribute('width', this.width);
    this.onResize();
  }

  destroy() {
    window.removeEventListener('resize', this.resize);
  }

  getRenderingContext() {
    return this.gl;
  }

  getCanvasWidth() {
    return this.width;
  }
}
