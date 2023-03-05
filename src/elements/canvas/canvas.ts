export class Builder {
  private id: string;

  constructor() {
    this.id = '';
  }

  Id(id: string): Builder {
    this.id = id;
    return this;
  }

  Render(): HTMLCanvasElement {
    const canvas = document.createElement('canvas');

    canvas.id = this.id;

    return canvas;
  }
}
