import { FormControl, FormLabel, FormHelperText, Input, VStack, Textarea, HStack } from "@hope-ui/solid";
import { createEffect, createSignal } from "solid-js";

function Pertenencia() {
  const [Conj1, setConj1] = createSignal("");
  const [Conj2, setConj2] = createSignal("");
  const [Result, setResult] = createSignal("");

  createEffect(() => {
    if (Conj1() === "" || Conj2() === "") return;
    setResult("Potenciación: " + Conj1().repeat(Number(Conj2())));
  });

  return (
    <>
      <VStack spacing="$5" alignItems="stretch" maxW="$96" mx="auto">
        <HStack spacing={20}>
          <FormControl>
            <FormLabel for="text">Cadena</FormLabel>
            <Input
              id="Conj1"
              type="text"
              value={Conj1()}
              onInput={(e) => setConj1(e.target.value.replace(/\s/g, ""))}
            />
            <FormHelperText>Cadena de texto. Ej: aceituna</FormHelperText>
          </FormControl>
          <VStack>
            <FormControl pb={26}>
              <FormLabel for="text">Potencia</FormLabel>
              <Input
                width={80}
                id="Conj2"
                type="text"
                value={Conj2()}
                onInput={(e) => setConj2(e.target.value.replace(/\s/g, "").replace(/[^\0-9]/gi, ""))}
              />
            </FormControl>
          </VStack>
        </HStack>
        <Textarea placeholder="Resultado" variant="filled" readOnly size="md" value={Result()} />
      </VStack>
    </>
  );
}
export default Pertenencia;
