import _counter from "./components/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const _childScope = _$.peekNextScope();
  const count = _counter({}, _$.register(() => {}, "packages/translator-tags/src/__tests__/fixtures/custom-tag-var-assignment/template.marko_0_count/var", _scope0_id));
  _$.write(`<button class=inc-parent>${_$.escapeXML(count)}${_$.markResumeNode(_scope0_id, "#text/2")}</button>${_$.markResumeNode(_scope0_id, "#button/1")}<button class=reset>reset</button>${_$.markResumeNode(_scope0_id, "#button/3")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/custom-tag-var-assignment/template.marko_0");
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/custom-tag-var-assignment/template.marko_0_count");
  _$.writeScope(_scope0_id, {
    "count": count,
    "#childScope/0": _$.writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/custom-tag-var-assignment/template.marko", _renderer);