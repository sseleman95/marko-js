import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const el = _$.nodeRef();
  _$.write(`<div></div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  if (true) {
    const _scope1_id = _$.nextScopeId();
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1");
    _$.writeScope(_scope1_id, {
      "_": _$.ensureScopeWithId(_scope0_id)
    });
  }
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);