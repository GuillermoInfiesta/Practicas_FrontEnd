import { Signal } from "@preact/signals";

export type Comment = {
  user: string;
  message: string;
};

export type Lover = {
  name: string;
  //password: string;
  age: number;
  sex: string;
  description: string;
  hobbies: string[];
  photo: string;
  comments: Comment[];
};

export type SearchFiltersProps = {
  name: Signal<string>;
  age: Signal<number>;
  sex: Signal<string>;
  hobbies: Signal<string[]>;
};
