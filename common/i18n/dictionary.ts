import { en } from "./en";
import { es } from "./es";

export const dictionary = {
  en,
  es,
};

export type Locale = keyof typeof dictionary;
export type Dictionary = typeof dictionary.en;