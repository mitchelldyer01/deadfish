export class Builder {
  private id: string;

  constructor() {
    this.id = '';
  }

  Id(id: string): Builder {
    this.id = id;
    return this;
  }

  Render(): HTMLDivElement {
    const div = document.createElement('div');

    div.id = this.id;

    return div;
  }
}
