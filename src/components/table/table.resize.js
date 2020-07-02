import {$} from '@core/dom';

export function resizeHandler(This, target) {
  const $resizer = $(target);
  const $parent = $resizer.closest('[data-type="resizable"]');
  const coords = $parent.getCoords();
  const type = $resizer.data.resize;
  const sideProp = type === 'col' ? ['height', 'vh'] : ['width', 'vw'];
  let value;

  $resizer.css({
    opacity: 1,
    [sideProp[0]]: '100' + sideProp[1]
  });

  document.onmousemove = e => {
    if (target.dataset.resize === 'col') {
      const delta = e.pageX - coords.right;
      value = coords.width + delta;
      $resizer.css({right: -delta + 'px'});
    } else {
      const delta = e.pageY - coords.bottom;
      value = coords.height + delta;
      $resizer.css({bottom: -delta + 'px'});
    }
  };

  document.onmouseup = e => {
    document.onmousemove = null;
    document.onmouseup = null;

    if (type === 'col') {
      This.$root.findAll(`[data-col="${$parent.data.col}"]`)
          .forEach(el => el.style.width = value + 'px');
    } else {
      $parent.css({height: `${value}px`});
    }

    $resizer.removeCss();
  };
}
