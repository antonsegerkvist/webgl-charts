import Stage from '../common/stage/Stage';

export default class BarChart {
  constructor(props) {
    this.element = props.element;
    this.height = props.height || 250;
  }

  init() {
    this.stage = new Stage({
      element: this.element,
      height: this.height,
    });
    this.stage.init();
  }
}
