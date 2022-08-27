import { FormControl, FormLabel, FormHelperText, Input, VStack, Textarea } from "@hope-ui/solid";
import { createEffect, createSignal } from "solid-js";
import { Diferencia_simétrica } from "../../../functions/Alfabetos";

function Pertenencia() {
  const [Conj1, setConj1] = createSignal("");
  const [Conj2, setConj2] = createSignal("");
  const [Result, setResult] = createSignal("");
  const cname = "G",
    c2name = "H";

  createEffect(() => {
    if (Conj1() === "" || Conj2() === "") return;
    const res = Diferencia_simétrica(Conj1(), Conj2());
    if (res.length === 0) {
      setResult(`Los conjuntos ${cname} y ${c2name} tienen valores iguales.`);
    } else {
      setResult(`Los elementos { ${res} } se encuentran en los conjuntos ${cname} o ${c2name}, pero no en ambos.`);
    }
  });

  return (
    <>
      <VStack spacing="$5" alignItems="stretch" maxW="$96" mx="auto">
        <FormControl>
          <FormLabel for="text">Primer conjunto ({cname})</FormLabel>
          <Input id="Conj1" type="text" value={Conj1()} onInput={(e) => setConj1(e.target.value.replace(/\s/g, ""))} />
          <FormHelperText>Separado por comas. Ej: x, y, z</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel for="text">Segundo conjunto ({c2name})</FormLabel>
          <Input id="Conj2" type="text" value={Conj2()} onInput={(e) => setConj2(e.target.value.replace(/\s/g, ""))} />
          <FormHelperText>Separado por comas. Ej: a, y, c, 5</FormHelperText>
        </FormControl>
        <Textarea placeholder={`Resultado`} variant="filled" readOnly size="md" value={Result()} />
      </VStack>
    </>
  );
}
export default Pertenencia;
