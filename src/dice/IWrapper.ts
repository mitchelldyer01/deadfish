export interface IWrapper {
  Build(): void;
  Init(): void;
  Roll(qty: string): Promise<number>;
}
