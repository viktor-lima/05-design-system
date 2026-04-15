// src/index.tsx
import { colors } from "@ignite-ui/tokens";
import { jsx } from "react/jsx-runtime";
function App(props) {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { style: { color: colors.ignite300 }, children: "Hello Word" }) });
}
export {
  App
};
