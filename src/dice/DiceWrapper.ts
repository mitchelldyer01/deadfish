import DiceBox from '@3d-dice/dice-box';

export class Builder {
  private assetPath: string;
  private id: string;

  constructor() {
    this.assetPath = '';
    this.id = '';
  }

  AssetPath(assetPath: string): Builder {
    this.assetPath = assetPath;
    return this;
  }

  Id(id: string): Builder {
    this.id = id;
    return this;
  }

  Roll(qty: string): void {
    const dice = new DiceBox(this.id, {
      assetPath: this.assetPath,
      origin: 'https://unpkg.com/@3d-dice/dice-box@1.0.8/dist/',
      scale: 6,
    });

    dice.init().then(() => {
      dice.roll(qty);
    });
  }
}
