import { t as _t } from "marko/src/runtime/html/index.js";
const _marko_componentType = "packages/translator-default/test/fixtures/typescript-generic-tag/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _typeArg from "./components/type-arg.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag.js";
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml.js";
import _typeParam from "./components/type-param.marko";
import _typeArgAndParam from "./components/type-arg-and-param.marko";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_tag(_typeArg, {}, out, _componentDef, "0");
  _marko_tag(_typeParam, {
    "renderBody": (out, x) => {
      out.w(_marko_escapeXml(x));
    }
  }, out, _componentDef, "1");
  _marko_tag(_typeArgAndParam, {
    "arg": "hello",
    "renderBody": (out, x) => {
      out.w(_marko_escapeXml(x));
    }
  }, out, _componentDef, "2");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);