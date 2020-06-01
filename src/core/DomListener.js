import {capitalize} from '@core/utils';

// Класс отвечает за установку и удаление слушаетелей.
// $root - корневой DOM элемент компонента.
export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`no $root provided for DomListener`);
    }

    this.$root = $root;
    this.listeners = listeners;
  }
  // Установка слушателей
  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      if (!this[method]) {
        const name = this.name || '';
        throw new Error(
            `method ${method} is not implemented in ${name} Component`
        );
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }
  // Удаление слушателя
  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      this.$root.off(listener, this[method]);
    });
  }
}
// eventName => 'on' + eventName
function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}
