/* @refresh reload */
import { render } from "solid-js/web";
import { HopeProvider } from "@hope-ui/solid";
import { Router } from "@solidjs/router";
import App from "./App";

const config = {
  initialColorMode: "system",
  components: {
    Textarea: {
      baseStyle: {
        resize: "vertical",
        maxHeight: "222px",
        minHeight: "100px",
      },
    },
  },
};

render(
  () => (
    <HopeProvider config={config}>
      <Router>
        <App />
      </Router>
    </HopeProvider>
  ),
  document.getElementById("root")
);
