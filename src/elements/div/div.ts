export class Builder {
  private id: string;
  private classes: string[];

  constructor() {
    this.id = '';
    this.classes = [''];
  }

  Id(id: string): Builder {
    this.id = id;
    return this;
  }

  Classes(classes: string[]): Builder {
    this.classes = classes;
    return this;
  }

  Render(): HTMLDivElement {
    const div = document.createElement('div');

    div.id = this.id;
    div.className = this.classes.join(' ');

    return div;
  }
}
