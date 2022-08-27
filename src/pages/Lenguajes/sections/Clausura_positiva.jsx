import { FormControl, FormLabel, FormHelperText, Input, VStack, Textarea } from "@hope-ui/solid";
import { createEffect, createSignal } from "solid-js";
import { Clausuras } from "../../../functions/Lenguajes";

function Pertenencia() {
  const [Leng1, setLeng1] = createSignal("");
  const [Result, setResult] = createSignal("");

  createEffect(() => {
    if (Leng1() === "") return;
    setResult(`{${Clausuras(Leng1())}}...`);
  });

  return (
    <VStack spacing="$5" alignItems="stretch" maxW="$96" mx="auto">
      <FormControl>
        <FormLabel for="text">Lenguaje</FormLabel>
        <Input id="Leng1" type="text" value={Leng1()} onInput={(e) => setLeng1(e.target.value.replace(/\s/g, ""))} />
        <FormHelperText>Separado por comas. Ej: ciruela, coco, membrillo</FormHelperText>
      </FormControl>
      <Textarea placeholder="Resultado" variant="filled" readOnly size="md" value={Result()} />
    </VStack>
  );
}
export default Pertenencia;
