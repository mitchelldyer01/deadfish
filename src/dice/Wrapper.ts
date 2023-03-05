import DiceBox from '@3d-dice/dice-box';
import { IWrapper } from './IWrapper';

export class Wrapper implements IWrapper {
  assetPath: string;
  id: string;

  Roll(qty: string): void {
    const dice = new DiceBox(this.id, {
      assetPath: this.assetPath,
      origin: 'https://unpkg.com/@3d-dice/dice-box@1.0.8/dist/',
      scale: 6,
    });

    dice.init().then(() => {
      dice.roll(qty).then(results => console.log(results));
    });
  }
}
