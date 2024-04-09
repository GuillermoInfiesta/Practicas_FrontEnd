import { FreshContext } from "$fresh/server.ts";
import * as cookie from "https://deno.land/std@0.221.0/http/cookie.ts";
//import { Response } from "https://deno.land/x/oak@14.2.0/mod.ts";

export const handler = (_req: Request, _ctx: FreshContext) => {
  const headers = new Headers();
  const ck: cookie.Cookie = { name: "Hola", value: "Amarillo" };
  cookie.setCookie(headers, ck);
  console.log(cookie.getCookies(headers));
  return new Response("Hola");
};
