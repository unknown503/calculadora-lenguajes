import MenuSection from "./MenuSection/index";
import { alfabetos, cadenas, lenguajes } from "../routes/routes";
import { Flex } from "@hope-ui/solid";

function MainMenu() {
  return (
    <Flex
      py={10}
      px={80}
      borderWidth="1px"
      borderColor="$neutral6"
      borderRadius="$lg"
      shadow="$xl"
      justifyContent="center"
    >
      <MenuSection title="Alfabetos" menu={alfabetos} colorScheme="success" />
      <MenuSection title="Cadenas" menu={cadenas} colorScheme="accent" />
      <MenuSection title="Lenguajes" menu={lenguajes} colorScheme="info" />
    </Flex>
  );
}
export default MainMenu;
