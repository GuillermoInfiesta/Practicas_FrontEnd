import { PageProps } from "$fresh/server.ts";
const Page = (props: PageProps) => {
  return (
    <div>
      <form>
        <input scope={"Name"} />
      </form>
    </div>
  );
};

export default Page;
