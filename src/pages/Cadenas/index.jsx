import { useLocation } from "@solidjs/router";
import { Heading, Center, VStack, HStack } from "@hope-ui/solid";
import MenuSection from "../../components/MenuSection";
import { cadenas } from "../../routes/routes";
import { createEffect, createSignal, Switch, Match } from "solid-js";
import { Concatenación, Inversa, Longitud, Potenciación } from "./sections";

function index() {
  const location = useLocation();
  const [Section, setSection] = createSignal();

  createEffect(() => {
    setSection(location.pathname.split("/")[2]);
  });

  return (
    <Center mx="auto">
      <HStack
        shadow="$xl"
        spacing="18px"
        pl="$8"
        pr="$20"
        mt="$10"
        py={30}
        borderWidth="1px"
        borderColor="$neutral6"
        borderRadius="$lg"
      >
        <MenuSection title="Cadenas" menu={cadenas} colorScheme="accent" />
        <VStack spacing={20}>
          <Heading size="2xl">{Section()}</Heading>
          <Switch fallback={<div>Not Found</div>}>
            <Match when={Section() === "Longitud"}>
              <Longitud />
            </Match>
            <Match when={Section() === "Concatenación"}>
              <Concatenación />
            </Match>
            <Match when={Section() === "Potenciación"}>
              <Potenciación />
            </Match>
            <Match when={Section() === "Inversa"}>
              <Inversa />
            </Match>
          </Switch>
        </VStack>
      </HStack>
    </Center>
  );
}
export default index;
