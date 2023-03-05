import DiceBox from '@3d-dice/dice-box';
import { IWrapper } from './IWrapper';

export class MockWrapper implements IWrapper {
  assetPath: string;
  id: string;

  Roll(qty: string): void {
    console.log(qty);
  }
}
