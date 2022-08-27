import { FormControl, FormLabel, FormHelperText, Input, VStack, Textarea } from "@hope-ui/solid";
import { createEffect, createSignal } from "solid-js";
import { Intersección } from "../../../functions/Lenguajes";

function Pertenencia() {
  const [Leng1, setLeng1] = createSignal("");
  const [Leng2, setLeng2] = createSignal("");
  const [Result, setResult] = createSignal("");

  createEffect(() => {
    if (Leng1() === "" || Leng2() === "") return;
    const intRes = Intersección(Leng1(), Leng2());
    if (intRes.length === 0) {
      setResult(`Los lenguajes son totalmente distintos.`);
    } else {
      const text = `Los lenguajes tienen en común:`;
      setResult(`${text} { ${intRes} }`);
    }
  });

  return (
    <VStack spacing="$5" alignItems="stretch" maxW="$96" mx="auto">
      <FormControl>
        <FormLabel for="text">Primer lenguaje</FormLabel>
        <Input id="Leng1" type="text" value={Leng1()} onInput={(e) => setLeng1(e.target.value.replace(/\s/g, ""))} />
        <FormHelperText>Separado por comas. Ej: platano, granada, guayaba</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel for="text">Segundo lenguaje</FormLabel>
        <Input id="Leng2" type="text" value={Leng2()} onInput={(e) => setLeng2(e.target.value.replace(/\s/g, ""))} />
        <FormHelperText>Separado por comas. Ej: maracuyá, naranja, mandarina</FormHelperText>
      </FormControl>
      <Textarea placeholder="Resultado" variant="filled" readOnly size="md" value={Result()} />
    </VStack>
  );
}
export default Pertenencia;
