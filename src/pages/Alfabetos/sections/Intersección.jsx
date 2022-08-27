import { FormControl, FormLabel, FormHelperText, Input, VStack, Textarea } from "@hope-ui/solid";
import { createEffect, createSignal } from "solid-js";
import { Intersección } from "../../../functions/Alfabetos";

function Pertenencia() {
  const [Conj1, setConj1] = createSignal("");
  const [Conj2, setConj2] = createSignal("");
  const [Result, setResult] = createSignal("");
  const cname = "E",
    c2name = "F";

  createEffect(() => {
    if (Conj1() === "" || Conj2() === "") return;
    const intRes = Intersección(Conj1(), Conj2());
    if (intRes.length === 0) {
      setResult(`Los conjuntos ${cname} y ${c2name} son disjuntivos.`);
    } else {
      const text = `Los conjuntos ${cname} y ${c2name} tienen en común:`;
      setResult(`${text} { ${intRes} }`);
    }
  });

  return (
    <>
      <VStack spacing="$5" alignItems="stretch" maxW="$96" mx="auto">
        <FormControl>
          <FormLabel for="text">Primer conjunto ({cname})</FormLabel>
          <Input id="Conj1" type="text" value={Conj1()} onInput={(e) => setConj1(e.target.value.replace(/\s/g, ""))} />
          <FormHelperText>Separado por comas. Ej: a, b, c</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel for="text">Segundo conjunto ({c2name})</FormLabel>
          <Input id="Conj2" type="text" value={Conj2()} onInput={(e) => setConj2(e.target.value.replace(/\s/g, ""))} />
          <FormHelperText>Separado por comas. Ej: d, e, f</FormHelperText>
        </FormControl>
        <Textarea placeholder="Resultado" variant="filled" readOnly size="md" value={Result()} />
      </VStack>
    </>
  );
}
export default Pertenencia;
