import { Heading, Button, VStack } from "@hope-ui/solid";
import { For } from "solid-js";
import { Link } from "@solidjs/router";

function index({ title, menu, colorScheme }) {
  return (
    <VStack spacing="14px" maxW="$lg" p="$12">
      <Heading size="2xl" px="$4" pb="$2">
        {title}
      </Heading>
      <For each={menu}>
        {(item) => (
          <Link href={`/${title.toLowerCase()}/${item}`}>
            <Button size="lg" height="48px" width="200px" colorScheme={colorScheme}>
              {item}
            </Button>
          </Link>
        )}
      </For>
    </VStack>
  );
}
export default index;
