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
  #element = null;

  get template() {
    return getCreateFormTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
