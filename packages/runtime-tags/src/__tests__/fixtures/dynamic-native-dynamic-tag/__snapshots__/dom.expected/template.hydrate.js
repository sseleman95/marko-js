// size: 341 (min) 225 (brotli)
const _tagNameBody = _$.register(
    "a0",
    _$.createRendererWithOwner("body content", ""),
  ),
  _tagName_input = _$.dynamicTagAttrs(0, _tagNameBody),
  _expr_Text_className = _$.intersection(
    2,
    (_scope) => {
      const { 3: className } = _scope;
      _tagName_input(_scope, () => ({ class: className }));
    },
    () => _tagName_input,
  ),
  _dynamicTagName = _$.conditional(0, 0, () => _expr_Text_className),
  _tagName_effect = _$.effect("a1", (_scope, { 2: tagName }) =>
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
