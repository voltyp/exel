export class TableSelection {
  static className = 'selected';

  constructor() {
    // храним выбранные ячейки
    this.group = [];
    this.start = null;
    this.current = null;
  }

  // $el instance of DOM === true
  select($el) {
    this.clear();
    this.current = $el;
    this.group.push($el);
    $el.focus().addClass(TableSelection.className);
  }

  selectGroup($group = []) {
    this.clear();

    this.group = $group;
    this.group.forEach($el => $el.addClass(TableSelection.className));
  }

  clear() {
    this.group.forEach($el => $el.removeClass(TableSelection.className));
    this.group = [];
  }
}
