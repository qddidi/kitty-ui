import styleInject from '../../node_modules/.pnpm/style-inject@0.3.0/node_modules/style-inject/dist/style-inject.es.js';

declare function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, _hoisted_3))
}

var css_248z = ".wrap .k-btn {\n  color: red;\n}\n";
styleInject(css_248z);

const script = {};

script.render = render;
script.__file = "button/src/button.vue";

export { script as Button };
