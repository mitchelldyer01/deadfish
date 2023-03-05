import { Builder as btnBuilder } from '../elements/button/button';
import { IWrapper as diceIWrapper } from '../dice/IWrapper';
import { Builder as divBuilder } from '../elements/div/div';
import { Builder as canvasBuilder } from '../elements/canvas/canvas';

export function main(dice: diceIWrapper): any {
  const body = document.body;

  const container: HTMLDivElement = new divBuilder()
    .Classes(['container'])
    .Render();
  body?.appendChild(container);

  const row: HTMLDivElement = new divBuilder()
    .Classes(['row', 'gx-8'])
    .Render();
  container?.appendChild(row);

  const column: HTMLDivElement = new divBuilder()
    .Classes(['col'])
    .Render();
  row?.appendChild(column);

  const board: HTMLDivElement = new divBuilder()
    .Classes(['p-4', 'border', 'bg-light'])
    .Render();
  column?.appendChild(board);

  const p = document.createElement('p');
  p.textContent = 'Hello, World';
  board?.appendChild(p);

  const diceDiv: HTMLDivElement = new divBuilder()
    .Id('dice-box')
    .Render();
  board?.appendChild(diceDiv);

  dice.Build();
  dice.Init();

  const rollBtn: HTMLButtonElement = new btnBuilder()
    .Id('roll-btn')
    .Text('Roll')
    .Classes(['btn', 'btn-outline-primary'])
    .OnClick(() => {dice.Roll('4d6')})
    .Render();
  board?.appendChild(rollBtn);
}

