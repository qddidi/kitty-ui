"use strict";
require("./style/index.css");
var vue = require("vue");
var pluginVue_exportHelper = require("../_virtual/plugin-vue_export-helper.js");
const _sfc_main = vue.defineComponent({
  name: "button",
  setup() {
    return {};
  }
});
const _hoisted_1 = { class: "wrap" };
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("button", { class: "k-btn" }, "\u6309\u94AE", -1);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, _hoisted_3);
}
var button = /* @__PURE__ */ pluginVue_exportHelper(_sfc_main, [["render", _sfc_render]]);
module.exports = button;
