import { FormControl, FormLabel, FormHelperText, Input, VStack, Textarea } from "@hope-ui/solid";
import { createEffect, createSignal } from "solid-js";
import { Unión } from "../../../functions/Lenguajes";

function Pertenencia() {
  const [Leng1, setLeng1] = createSignal("");
  const [Leng2, setLeng2] = createSignal("");
  const [Result, setResult] = createSignal("");

  createEffect(() => {
    if (Leng1() === "" || Leng2() === "") return;
    setResult("Unión: " + Unión(Leng1(), Leng2()));
  });

  return (
    <VStack spacing="$5" alignItems="stretch" maxW="$96" mx="auto">
      <FormControl>
        <FormLabel for="text">Primer lenguaje</FormLabel>
        <Input id="Leng1" type="text" value={Leng1()} onInput={(e) => setLeng1(e.target.value.replace(/\s/g, ""))} />
        <FormHelperText>Separado por comas. Ej: kiwi, limón, manzana</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel for="text">Segundo lenguaje</FormLabel>
        <Input id="Leng2" type="text" value={Leng2()} onInput={(e) => setLeng2(e.target.value.replace(/\s/g, ""))} />
        <FormHelperText>Separado por comas. Ej: durazno, piña, papaya</FormHelperText>
      </FormControl>
      <Textarea placeholder="Resultado" variant="filled" readOnly size="md" value={Result()} />
    </VStack>
  );
}
export default Pertenencia;
