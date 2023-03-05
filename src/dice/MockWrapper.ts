import DiceBox from '@3d-dice/dice-box';
import { IWrapper } from './IWrapper';

export class MockWrapper implements IWrapper {
  Build(): void { console.log(''); }

  Init(): void { console.log(''); }

  Roll(qty: string): void {
    console.log(qty);
  }
}
