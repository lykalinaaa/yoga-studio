import { defineComponent as s, openBlock as u, createElementBlock as _, normalizeClass as a, toDisplayString as p } from "vue";
const B = "#EAE7DE", m = "#8FA096", f = "#DBC1B2", y = "#383C3F";
const E = /* @__PURE__ */ s({
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
  setup(t, { emit: o }) {
    const c = o;
    function i(e) {
      c("click", e);
    }
    return (e, n) => (u(), _("button", {
      class: a(["button", t.type]),
      onClick: n[0] || (n[0] = (l) => i(l))
    }, p(t.title), 3));
  }
});
export {
  y as BG_DARK,
  B as BG_DEFAULT,
  m as BG_GREEN,
  f as BG_PINK,
  E as Button
};
