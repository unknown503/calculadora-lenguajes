import { Center, useColorMode, Heading, Spacer, IconButton } from "@hope-ui/solid";
import { Icon } from "solid-heroicons";
import { moon, sun, arrowLeft } from "solid-heroicons/solid";
import { Link, useLocation } from "@solidjs/router";
import { Show } from "solid-js";

function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const IconComp = () => (colorMode() === "light" ? <Icon path={moon} /> : <Icon path={sun} />);
  const location = useLocation();
  return (
    <Center>
      <Show when={location.pathname !== "/"}>
        <Link href="/">
          <IconButton
            mt="$2"
            variant="ghost"
            colorScheme="neutral"
            size="sm"
            aria-label="Back"
            icon={<Icon path={arrowLeft} />}
          />
        </Link>
      </Show>
      <Link href="/">
        <Heading size="4xl" px="$8">
          Lenguajes Formales
        </Heading>
      </Link>
      <IconButton
        mt="$2"
        variant="ghost"
        colorScheme="neutral"
        size="sm"
        aria-label="Switch mode"
        onClick={toggleColorMode}
        icon={IconComp}
      />
    </Center>
  );
}
export default Nav;
