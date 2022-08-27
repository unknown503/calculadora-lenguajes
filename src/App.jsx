import { Container } from "@hope-ui/solid";
import { Routes, Route } from "@solidjs/router";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Alfabetos from "./pages/Alfabetos/";
import Cadenas from "./pages/Cadenas/";
import Lenguajes from "./pages/Lenguajes/";
import NotFound from "./pages/404";

function App() {
  return (
    <>
      <Container mt="$8" p="$4" centered={true}>
        <Nav />
        <Routes>
          <Route path="/" component={Home} />
          <Route path={"/alfabetos/:id"} component={Alfabetos} />
          <Route path={"/cadenas/:id"} component={Cadenas} />
          <Route path={"/lenguajes/:id"} component={Lenguajes} />
          <Route path={"/:id"} component={NotFound} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
