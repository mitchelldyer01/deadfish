import DiceBox from '@3d-dice/dice-box';
import { IWrapper } from './IWrapper';

export class MockWrapper implements IWrapper {
  Build(): void { console.log(''); }

  Init(): void { console.log(''); }

  async Roll(qty: string): Promise<number> {
      return await 0+1;
  }
}
