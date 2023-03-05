import { Builder as btnBuilder } from '../elements/button/button';
import { IWrapper as diceIWrapper } from '../dice/IWrapper';
import { Builder as divBuilder } from '../elements/div/div';

export function main(dice: diceIWrapper): any {
  const body = document.body;

  const p = document.createElement('p');
  p.textContent = 'Hello, World';
  body?.appendChild(p);

  const diceDiv: HTMLDivElement = new divBuilder()
    .Id('dice-box')
    .Render();
  body?.appendChild(diceDiv);

  const newGameBtn: HTMLButtonElement = new btnBuilder()
    .Id('new-game')
    .Text('New Game')
    .OnClick(() => {dice.Roll('4d6')})
    .Render();
  body?.appendChild(newGameBtn);
}

