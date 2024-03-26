import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { CharacterParams } from "../components/Character.tsx";

type addCharacterProps = {
  method: string;
  success: boolean;
  errorMessage: string | undefined;
};
export const handler: Handlers = {
  GET: (_req: Request, ctx: FreshContext<unknown, addCharacterProps>) => {
    return ctx.render({
      method: "get",
      success: true,
      errorMessage: undefined,
    });
  },
  POST: async (
    req: Request,
    ctx: FreshContext<unknown, addCharacterProps>,
  ) => {
    const form = await req.formData();
    const name = form.get("name") || undefined;
    const image = form.get("image") || undefined;
    const sound = form.get("sound") || undefined;
    const creator = form.get("creator") || undefined;

    const response = await fetch("https://supermondongo.deno.dev/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        image: image,
        sound: sound,
        creator: creator,
      }),
    });

    if (response.status !== 201) {
      return ctx.render({
        method: "post",
        success: false,
        errorMessage: "Missing body fields",
      });
    }
    return ctx.render({
      method: "post",
      success: true,
      errorMessage: undefined,
    });
  },
};

//Si lo hago client side hacer un componente que sea if ok -> mensaje, if mal -> mensaje error, y por default no es nada
const Page = (props: PageProps<addCharacterProps>) => {
  const method = props.data.method;
  const success = props.data.success;
  const error = props.data.errorMessage;
  return (
    <div class="add-character-display">
      <form method="post" class="character-form">
        <h2>Datos del personaje</h2>
        <input placeholder="Nombre" name="name" />
        <input placeholder="URL imagen" name="image" />
        <input placeholder="URL sonido" name="sound" />
        <input placeholder="Creador" name="creator" />
        <button type="submit">Añadir</button>
      </form>
      {method === "post" && (
        success === true && <span>Personaje añadido</span> ||
        <span class="error">{error}</span>
      )}
    </div>
  );
};

export default Page;
