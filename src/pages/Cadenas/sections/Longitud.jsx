import { FormControl, FormLabel, FormHelperText, Input, VStack, Textarea } from "@hope-ui/solid";
import { createEffect, createSignal } from "solid-js";

function Pertenencia() {
  const [Conj1, setConj1] = createSignal("");
  const [Result, setResult] = createSignal("");

  createEffect(() => {
    if (Conj1() === "") return;
    const text = "La longitud de la cadena es: " + Conj1().length;
    setResult(text);
  });

  return (
    <>
      <VStack spacing="$5" alignItems="stretch" maxW="$96" mx="auto">
        <FormControl>
          <FormLabel for="text">Cadena</FormLabel>
          <Input id="Conj1" type="text" value={Conj1()} onInput={(e) => setConj1(e.target.value.replace(/\s/g, ""))} />
          <FormHelperText>Cadena de texto. Ej: almendra</FormHelperText>
        </FormControl>
        <Textarea placeholder="Resultado" variant="filled" readOnly size="md" value={Result()} />
      </VStack>
    </>
  );
}
export default Pertenencia;
