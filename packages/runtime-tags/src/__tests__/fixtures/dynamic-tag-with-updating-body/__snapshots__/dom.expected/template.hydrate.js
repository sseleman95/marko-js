// size: 462 (min) 270 (brotli)
const _count_effect = _$.effect("a0", (_scope, { 2: count }) =>
    _$.on(_scope[0], "click", function () {
      _count(_scope, count + 1);
    }),
  ),
  _count = _$.state(2, (_scope, count) => {
    _$.data(_scope[1], count), _count_effect(_scope);
  });
const _setup$tagNameBody = (_scope) => {
    !(function (_scope) {
      _count(_scope, 0);
    })(_scope[0]);
  },
  _tagNameBody = _$.register(
    "b0",
    _$.createRendererWithOwner(
      "<button id=count> </button>",
      "/ D l&",
      _setup$tagNameBody,
    ),
  ),
  _tagName_input = _$.dynamicTagAttrs(0, _tagNameBody),
  _dynamicTagName = _$.conditional(
    0,
    (_scope) => _tagName_input(_scope, () => ({})),
    () => _tagName_input,
  ),
  _tagName_effect = _$.effect("b1", (_scope, { 2: tagName }) =>
    _$.on(_scope[1], "click", function () {
      _tagName(_scope, "span" === tagName ? "div" : "span");
    }),
  ),
  _tagName = _$.state(
    2,
    (_scope, tagName) => {
      _tagName_effect(_scope),
        _dynamicTagName(_scope, tagName || _tagNameBody(_scope));
    },
    () => _dynamicTagName,
  );
init();