import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { CharacterParams } from "../components/Character.tsx";
import CharacterAddForm from "../islands/CharacterAddForm.tsx";

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
};

const Page = (props: PageProps<addCharacterProps>) => {
  return <CharacterAddForm />;
};

export default Page;
