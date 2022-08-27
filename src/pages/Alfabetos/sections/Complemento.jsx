import { FormControl, FormLabel, FormHelperText, Input, VStack, Textarea } from "@hope-ui/solid";
import { createEffect, createSignal } from "solid-js";
import { Complemento } from "../../../functions/Alfabetos";

function Pertenencia() {
  const [Conj1, setConj1] = createSignal("");
  const [Conj2, setConj2] = createSignal("");
  const [Result, setResult] = createSignal("");
  const cname = "U",
    c2name = "B";

  createEffect(() => {
    if (Conj1() === "" || Conj2() === "") return;
    const intRes = Complemento(Conj1(), Conj2());
    if(intRes.length===0) {
      setResult(`Los conjuntos ${cname} y ${c2name} tienes valores iguales.`);
    }else{
      const text = `El conjunto ${c2name} no tiene los siguientes elementos del conjunto ${cname}:`;
      setResult(`${text} { ${intRes} }`);
    }
  });

  return (
    <>
      <VStack spacing="$5" alignItems="stretch" maxW="$96" mx="auto">
        <FormControl>
          <FormLabel for="text">Primer conjunto ({cname})</FormLabel>
          <Input id="Conj1" type="text" value={Conj1()} onInput={(e) => setConj1(e.target.value.replace(/\s/g, ""))} />
          <FormHelperText>Separado por comas. Ej: 1, 2, 3, 4, 5</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel for="text">Segundo conjunto ({c2name})</FormLabel>
          <Input id="Conj2" type="text" value={Conj2()} onInput={(e) => setConj2(e.target.value.replace(/\s/g, ""))} />
          <FormHelperText>Separado por comas. Ej: 1, 6, 7</FormHelperText>
        </FormControl>
        <Textarea placeholder={`Resultado de ${c2name}’`} variant="filled" readOnly size="md" value={Result()} />
      </VStack>
    </>
  );
}
export default Pertenencia;
