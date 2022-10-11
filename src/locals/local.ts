import en from './en/index';
import vi from './vi/index';

class Local {
  en = en;
  // zh = zh;
  vi = vi;
}
export const local = new Local();
export type LocalType = keyof Local;