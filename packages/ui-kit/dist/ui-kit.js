import { defineComponent as e, openBlock as n, createElementBlock as o, normalizeClass as c, toDisplayString as s } from "vue";
const i = "#EAE7DE", u = "#8FA096", r = "#DBC1B2", p = "#383C3F", B = /* @__PURE__ */ e({
  __name: "Button",
  props: {
    type: {
      default: "default",
      type: String
    },
    title: {
      default: "Кнопка",
      type: String
    }
  },
  emits: ["click"],
  setup(t) {
    return (l, _) => (n(), o("button", {
      class: c(["button", t.type])
    }, s(t.title), 3));
  }
});
export {
  p as BG_DARK,
  i as BG_DEFAULT,
  u as BG_GREEN,
  r as BG_PINK,
  B as Button
};
