import { createElement } from '../render';

const createPointsListTemplate = () => (`
<ul class="trip-events__list">
</ul>
`);

export default class PointsListView {

  getTemplate() {
    return createPointsListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(createPointsListTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
