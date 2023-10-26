import { atom, map } from "nanostores";
import { persistentAtom, persistentMap } from "@nanostores/persistent";

// use nanostores/persistent if you wanto to save the state to localStorage

export const boolVar = atom(false);

export type ExampleItem = {
  title: string;
  description: string;
};
map<Record<string, ExampleItem>>;
export const exampleArray = map<Record<string, ExampleItem>>({});

export function addExampleItem({ title, description }: ExampleItem) {
  const existingEntry = exampleArray.get()[title];
  if (existingEntry) {
    exampleArray.setKey(title, {
      ...existingEntry,
    });
  } else {
    exampleArray.setKey(title, { title, description});
  }
}
