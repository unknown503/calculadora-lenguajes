import { FormControl, FormLabel, FormHelperText, Input, VStack, Textarea } from "@hope-ui/solid";
import { createEffect, createSignal } from "solid-js";
import { pertenencia } from "../../../functions/Alfabetos";

function Pertenencia() {
  const [Conj1, setConj1] = createSignal("");
  const [Conj2, setConj2] = createSignal("");
  const [Result, setResult] = createSignal("");
  const cname = "A",
    c2name = "B";

  createEffect(() => {
    if (Conj1() === "" || Conj2() === "") return;
    const pertenenciaRes = pertenencia(Conj1(), Conj2());

    if (pertenenciaRes)
      setResult(
        `El conjunto ${cname} pertenece al conjunto ${c2name}.\n${Conj2()
          .split(",")
          .join("")
          .split("")} se encuentra en el conjunto ${Conj1().split(",").join("").split("")}`
      );
    if (!pertenenciaRes)
      setResult(
        `El conjunto ${cname} no pertenece al conjunto ${c2name}.\n${Conj2()
          .split(",")
          .join("")
          .split("")} no se encuentra en el conjunto \{ ${Conj1().split(",").join("").split("")}\ }`
      );
  });

  return (
    <>
      <VStack spacing="$5" alignItems="stretch" maxW="$96" mx="auto">
        <FormControl>
          <FormLabel for="text">Conjunto ({cname})</FormLabel>
          <Input id="Conj1" type="text" value={Conj1()} onInput={(e) => setConj1(e.target.value.replace(/\s/g, ""))} />
          <FormHelperText>Separado por comas. Ej: a, b, c, d, e</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel for="text">Letra a buscar ({c2name})</FormLabel>
          <Input id="Conj2" type="text" value={Conj2()} onInput={(e) => setConj2(e.target.value.replace(/\s/g, ""))} />
          <FormHelperText>Una sola letra. Ej: a</FormHelperText>
        </FormControl>
        <Textarea placeholder="Resultado" variant="filled" readOnly size="md" value={Result()} />
      </VStack>
    </>
  );
}
export default Pertenencia;
