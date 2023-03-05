import DiceBox from '@3d-dice/dice-box';
import { IWrapper } from './IWrapper';

const CDN_ORIGIN: string = 'https://unpkg.com/@3d-dice/dice-box@1.0.8/dist/';

export class Wrapper implements IWrapper {
  assetPath: string;
  id: string;
  canvasId: string;
  dice: any;

  Build(): void {
    this.dice = new DiceBox(this.id, {
      assetPath: this.assetPath,
      origin: CDN_ORIGIN,
      scale: 9,
      id: this.canvasId,
    });
  }

  Init(): void {
    this.dice.init();

    let canvas = document.getElementById('dice-canvas');
    if (canvas != null) {
        canvas.className = 'rounded, border, bg-light';
    }
  }

  async Roll(qty: string): Promise<number> {
    const results = await this.dice.roll(qty);

    let sum = 0;

    results.forEach(roll => {
        sum += roll.value;
    });
    
    return sum;
  }
}
