import { signal } from "@preact/signals";
import { Lover } from "./Types.ts";
export const active_user = signal<Lover | undefined>(undefined);
export const logged_in = signal<boolean>(false);
export const filterName = signal<string>("");
export const filterAge = signal<number>(-1);
export const filterSex = signal<string>("any");
export const filterHobbies = signal<string[]>([]);
export const focused_lover = signal<Lover | undefined>(undefined);
