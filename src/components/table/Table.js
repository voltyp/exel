import {ExelComponent} from '@core/ExelComponent';
import {createTable} from '@/components/table/table.template';
import {resizeHandler} from '@/components/table/table.resize';

export class Table extends ExelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown', 'mouseup', 'mousemove']
    });
  }
  toHTML() {
    return createTable();
  }

  onMousedown(event) {
    const target = event.target;
    // Ресайзим эл-т если доступна такая возможность
    if (target.dataset.resize) {
      resizeHandler(this, target);
    }
  }

  onMouseup(e) {

  }

  onMousemove(e) {

  }
}

