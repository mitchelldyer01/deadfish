import DiceBox from '@3d-dice/dice-box';
import { IWrapper } from './IWrapper';

export class Wrapper implements IWrapper {
  assetPath: string;
  id: string;
  canvasId: string;
  dice: any;

  Build(): void {
    this.dice = new DiceBox(this.id, {
      assetPath: this.assetPath,
      origin: 'https://unpkg.com/@3d-dice/dice-box@1.0.8/dist/',
      scale: 6,
      id: this.canvasId,
    });
  }

  Init(): void {
    this.dice.init();
  }

  Roll(qty: string): void {
    this.dice.roll(qty).then(results => console.log(results));
  }
}
