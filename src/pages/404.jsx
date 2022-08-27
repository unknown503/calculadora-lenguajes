import { Flex, Heading, VStack } from "@hope-ui/solid";
import { useLocation } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";

function Main() {
  const location = useLocation();
  const [Path, setPath] = createSignal();
  
  createEffect(() => {
    setPath(location.pathname.split("/")[1]);
  });
  return (
    <Flex pt="$40" justifyContent="center" alignItems="center">
      <VStack>
        <Heading size="9xl">404</Heading>
        <Heading size="2xl">{Path()} Not Found</Heading>
      </VStack>
    </Flex>
  );
}
export default Main;
