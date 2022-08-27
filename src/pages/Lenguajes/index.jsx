import { useLocation } from "@solidjs/router";
import { Heading, Center, VStack, HStack } from "@hope-ui/solid";
import MenuSection from "../../components/MenuSection";
import { lenguajes } from "../../routes/routes";
import { createEffect, createSignal, Switch, Match } from "solid-js";
import { Clausura_de_Kleene, Clausura_positiva, Concatenación, Intersección, Inversa, Potenciación, Resta, Unión } from "./sections";

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
        borderWidth="1px"
        borderColor="$neutral6"
        borderRadius="$lg"
      >
        <MenuSection title="Lenguajes" menu={lenguajes} colorScheme="info" />
        <VStack spacing={20}>
          <Heading size="2xl">{Section()}</Heading>
          <Switch fallback={<div>Not Found</div>}>
            <Match when={Section() === "Concatenación"}>
              <Concatenación />
            </Match>
            <Match when={Section() === "Potenciación"}>
              <Potenciación />
            </Match>
            <Match when={Section() === "Inversa"}>
              <Inversa />
            </Match>
            <Match when={Section() === "Unión"}>
              <Unión />
            </Match>
            <Match when={Section() === "Intersección"}>
              <Intersección />
            </Match>
            <Match when={Section() === "Resta"}>
              <Resta />
            </Match>
            <Match when={Section() === "Clausura de Kleene"}>
              <Clausura_de_Kleene />
            </Match>
            <Match when={Section() === "Clausura positiva"}>
              <Clausura_positiva />
            </Match>
          </Switch>
        </VStack>
      </HStack>
    </Center>
  );
}
export default index;
