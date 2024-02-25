import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="index comic-sans">
      No tan rápido, introduce el id de la frase que quieres en la url de la
      forma https://practica-1.deno.dev/id<br />
      O pulsa <a href="/1">aqui</a> para ver la primera frase<br />
    </div>
  );
}
