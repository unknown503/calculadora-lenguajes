import { useLocation } from "@solidjs/router";
import { Heading, Center, VStack, HStack } from "@hope-ui/solid";
import MenuSection from "../../components/MenuSection";
import { alfabetos } from "../../routes/routes";
import { createEffect, createSignal, Switch, Match } from "solid-js";
import { Pertenencia, Unión, Intersección, Complemento, Diferencia_absoluta, Diferencia_simétrica } from "./sections/";

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
        <MenuSection title="Alfabetos" menu={alfabetos} colorScheme="success" />
        <VStack spacing={20} my={40}>
          <Heading size="2xl">{Section()}</Heading>
          <Switch fallback={<div>Not Found</div>}>
            <Match when={Section() === "Pertenencia"}>
              <Pertenencia />
            </Match>
            <Match when={Section() === "Unión"}>
              <Unión />
            </Match>
            <Match when={Section() === "Intersección"}>
              <Intersección />
            </Match>
            <Match when={Section() === "Complemento"}>
              <Complemento />
            </Match>
            <Match when={Section() === "Diferencia absoluta"}>
              <Diferencia_absoluta />
            </Match>
            <Match when={Section() === "Diferencia simétrica"}>
              <Diferencia_simétrica />
            </Match>
          </Switch>
        </VStack>
      </HStack>
    </Center>
  );
}
export default index;
