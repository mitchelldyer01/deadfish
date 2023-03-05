export class Builder {
  private text: string;
  private id: string;
  private classes: string[];
  private onClick: () => void;

  constructor() {
    this.text = '';
    this.id = '';
    this.classes = [''];
    this.onClick = () => {};
  }

  Text(text: string): Builder {
    this.text = text;
    return this;
  }

  Id(id: string): Builder {
    this.id = id;
    return this;
  }

  Classes(classes: string[]): Builder {
    this.classes = classes;
    return this;
  }

  OnClick(onClick: () => void): Builder {
    this.onClick = onClick;
    return this;
  }

  Render(): HTMLButtonElement {
    const button = document.createElement('button');

    button.innerText = this.text;
    button.addEventListener('click', this.onClick);
    button.className = this.classes.join(' ');
    button.id = this.id;

    return button;
  }
}
