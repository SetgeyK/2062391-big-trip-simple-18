import { createElement } from '../render';

const getCreateFormTemplate = () => (`
  <section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
    <h1 class="trip-info__title">My BigTrip</h1>

    <p class="trip-info__dates">Sometimes…</p>
  </div>
  </section>
  `);

export default class CreateFormView {

  getTemplate() {
    return getCreateFormTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
