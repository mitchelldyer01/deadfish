import { Builder as btnBuilder } from './elements/button/button';
import { Builder as diceBuilder } from './dice/DiceWrapper';
import { Builder as divBuilder } from './elements/div/div';
export function main() {
  const body = document.body;

  const p = document.createElement('p');
  p.textContent = 'Hello, World';
  body?.appendChild(p);

  const diceDiv: HTMLDivElement = new divBuilder()
    .Id('dice-box')
    .Render();
  body?.appendChild(diceDiv);

  const dice: diceBuilder = new diceBuilder().Id('#dice-box').AssetPath('assets/');
  dice.Roll('2d20');

  const newGameBtn: HTMLButtonElement = new btnBuilder()
    .Id('new-game')
    .Text('New Game')
    .Render();
  body?.appendChild(newGameBtn);
}

window.onload = main;
