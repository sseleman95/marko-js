import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    x
  } = input;
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, x, {
    footer: _$.attrTag({
      class: "my-footer",
      renderBody: _$.register(/* @__PURE__ */_$.createRenderer(() => {
        const _scope3_id = _$.nextScopeId();
        _$.write("Footer content");
      }), "__tests__/template.marko_3_renderer", _scope0_id)
    }),
    header: _$.attrTag({
      class: "my-header",
      renderBody: _$.register(/* @__PURE__ */_$.createRenderer(() => {
        const _scope2_id = _$.nextScopeId();
        _$.write("Header content");
      }), "__tests__/template.marko_2_renderer", _scope0_id)
    })
  }, _$.register(/* @__PURE__ */_$.createRenderer(() => {
    const _scope1_id = _$.nextScopeId();
    _$.write("Body content");
  }), "__tests__/template.marko_1_renderer", _scope0_id));
  _$.write(_$.markResumeControlEnd(_scope0_id, "#text/0"));
  _$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(x)
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);