// size: 748 (min) 367 (brotli)
const _name_ = _$.value(3, (_scope, name) => _$.data(_scope[0], name)),
  _expr_outer_inner$forBody = _$.intersection(
    2,
    (_scope) => {
      const {
        _: { 2: outer },
        2: inner,
      } = _scope;
      _name_(_scope[0], `${outer}.${inner}`);
    },
    () => _$.inChild(0, _name_),
  ),
  _outer$forBody = _$.closure(2, 0, void 0, () => _expr_outer_inner$forBody),
  _inner$forBody = _$.value(2, 0, () => _expr_outer_inner$forBody),
  _params_3$forBody = _$.value(
    1,
    (_scope, _params_3) => _inner$forBody(_scope, _params_3[0]),
    () => _inner$forBody,
  ),
  _setup$forBody = (_scope) => {
    _scope[0];
  },
  _forBody2 = _$.register(
    "c",
    _$.createRenderer(
      "<div> </div>",
      "/D l&",
      _setup$forBody,
      () => [_outer$forBody],
      () => _params_3$forBody,
    ),
  ),
  _for$forBody = _$.loopOf(0, _forBody2),
  _outer$forBody2 = _$.value(2, 0, () => _$.inLoopScope(_outer$forBody, 0)),
  _items$forBody = _$.closure(
    2,
    (_scope, items) => _for$forBody(_scope, [items]),
    void 0,
    () => _for$forBody,
  ),
  _params_2$forBody = _$.value(
    1,
    (_scope, _params_2) => _outer$forBody2(_scope, _params_2[0]),
    () => _outer$forBody2,
  ),
  _forBody = _$.register(
    "d",
    _$.createRenderer(
      "<!><!><!>",
      "D%D",
      void 0,
      () => [_items$forBody],
      () => _params_2$forBody,
    ),
  ),
  _for = _$.loopOf(1, _forBody),
  _items_effect = _$.effect("e", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 2: items } = _scope;
        return function () {
          _items(_scope, [...items, items.length]);
        };
      })(_scope),
    ),
  ),
  _items = _$.state(
    2,
    (_scope, items) => {
      _items_effect(_scope), _for(_scope, [items]);
    },
    () => _$.intersections([_for, _$.inLoopScope(_items$forBody, 1)]),
  );
init();
