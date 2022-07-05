import { openBlock, createElementBlock, createElementVNode } from 'vue';

const _hoisted_1$1 = { class: "wrap" };
const _hoisted_2 = /*#__PURE__*/createElementVNode("button", { class: "k-btn" }, "按钮", -1 /* HOISTED */);
const _hoisted_3 = [
  _hoisted_2
];

function render$1(_ctx, _cache) {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, _hoisted_3))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".wrap .k-btn {\n  color: red;\n}\n";
styleInject(css_248z);

const script$1 = {};

script$1.render = render$1;
script$1.__file = "button/src/button.vue";

const _hoisted_1 = { class: "k-icon" };

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("i", _hoisted_1, "字体"))
}

const script = {};


script.render = render;
script.__file = "Icon/src/icon.vue";

export { script$1 as Button, script as Icon };
