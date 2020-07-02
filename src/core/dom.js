class Dom {
  constructor(selector) {
    // eslint-disable-next-line max-len
    this.$el = typeof selector === 'string' ? document.querySelector(selector) : selector;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }

  clear() {
    this.html('');
    return this;
  }
  // Установка событий
  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }
  // Удаление событий
  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback);
  }
  // Добавление дочерних эл-ов
  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }

    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
  }

  closest(selector) {
    return $(this.$el.closest(selector));
  }

  getCoords() {
    return this.$el.getBoundingClientRect();
  }

  get data() {
    return this.$el.dataset;
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector);
  }

  css(styles = {}) {
    Object.keys(styles).forEach( key => {
      this.$el.style[key] = styles[key];
    });
  }

  removeCss() {
    this.$el.removeAttribute('style');
  }
}

export function $(selector) {
  return new Dom(selector);
}
// создаем дом элемент
$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
