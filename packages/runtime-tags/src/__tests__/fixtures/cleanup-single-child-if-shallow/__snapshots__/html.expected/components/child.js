import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`<div>child</div>${_$.markResumeCleanup(_scope0_id)}`);
  _$.writeEffect(_scope0_id, "__tests__/components/child.marko_0_input");
  _$.writeScope(_scope0_id, {
    "input": input
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/components/child.marko", _renderer);