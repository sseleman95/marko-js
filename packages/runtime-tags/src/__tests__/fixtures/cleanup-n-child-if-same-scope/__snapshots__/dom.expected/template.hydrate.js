// size: 382 (min) 233 (brotli)
const _setup$ifBody_effect = _$.effect("a0", (_scope) => {
    (_scope._[1].innerHTML += "\nmounted"),
      (_$.getAbortSignal(_scope, 0).onabort = () => {
        _scope._[1].innerHTML += "\ndestroyed";
      });
  }),
  _setup$ifBody = (_scope) => {
    _$.resetAbortSignal(_scope, 0), _setup$ifBody_effect(_scope);
  },
  _ifBody = _$.register(
    "a1",
    _$.createRenderer("<div>a</div><span>b</span><p>c</p>", "", _setup$ifBody),
  ),
  _if = _$.conditional(2, 0),
  _show_effect = _$.effect("a2", (_scope, { 3: show }) =>
    _$.on(_scope[0], "click", function () {
      _show(_scope, !show);
    }),
  ),
  _show = _$.state(3, (_scope, show) => {
    _show_effect(_scope), _if(_scope, show ? _ifBody : null);
  });
init();
