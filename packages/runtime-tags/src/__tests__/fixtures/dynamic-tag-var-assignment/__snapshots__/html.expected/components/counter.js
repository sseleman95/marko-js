import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  _$.write(`<button class=inc>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  const _return = x;
  _$.writeEffect(_scope0_id, "__tests__/components/counter.marko_0_x");
  _$.writeScope(_scope0_id, {
    "x": x,
    "/": _tagVar,
    "@": _$.register(_new_x => {
      x = _new_x;
    }, "__tests__/components/counter.marko_0/valueChange", _scope0_id)
  });
  return _return;
});
export default /* @__PURE__ */_$.createTemplate("__tests__/components/counter.marko", _renderer);