export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _inputFoo_input = _$.dynamicTagAttrs("#text/0");
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", _scope => _inputFoo_input(_scope, () => ({})), () => _inputFoo_input);
export const _input_foo_ = /* @__PURE__ */_$.value("input_foo", (_scope, input_foo) => _dynamicTagName(_scope, input_foo), () => _dynamicTagName);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_foo_(_scope, input.foo), () => _input_foo_);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("__tests__/components/hello/index.marko", _template_, _walks_, _setup_, void 0, () => _params__);