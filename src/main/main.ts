import { Builder as btnBuilder } from '../elements/button/button';
import { IWrapper as diceIWrapper } from '../dice/IWrapper';
import { Builder as divBuilder } from '../elements/div/div';
import { Builder as canvasBuilder } from '../elements/canvas/canvas';

export function main(dice: diceIWrapper): any {
  let qtyDiceRolled: number = 0;
  let playerTotal: number = 0;
  let dealerTotal: number = 0;

  const body = document.body;

  const container: HTMLDivElement = new divBuilder()
    .Classes(['container'])
    .Render();
  body?.appendChild(container);

  const row: HTMLDivElement = new divBuilder()
    .Classes(['row', 'gx-8'])
    .Render();
  container?.appendChild(row);

  const leftCol: HTMLDivElement = new divBuilder()
    .Classes(['col'])
    .Render();
  row?.appendChild(leftCol);

  const column: HTMLDivElement = new divBuilder()
    .Classes(['col'])
    .Render();
  row?.appendChild(column);

  const rightCol: HTMLDivElement = new divBuilder()
    .Classes(['col'])
    .Render();
  row?.appendChild(rightCol)

  const header = document.createElement('h1');
  header.textContent = 'deadfish';
  header.className = 'text-center';
  column?.appendChild(header);

  const board: HTMLDivElement = new divBuilder()
    .Render();
  column?.appendChild(board);

  const diceDiv: HTMLDivElement = new divBuilder()
    .Id('dice-box')
    .Render();
  board?.appendChild(diceDiv);

  dice.Build();
  dice.Init()

  const standBtn: HTMLButtonElement = new btnBuilder()
    .Id('stand-btn')
    .Text('Stand')
    .Classes(['m-1', 'btn', 'btn-outline-danger'])
    .OnClick(() => {
        if (playerTotal > dealerTotal) {
            alert('winner! ' + playerTotal + '-' + dealerTotal);
        } else {
            alert('loser! ' + dealerTotal + '-' + playerTotal);
        }

        standBtn.disabled = true;
        playerTotal = 0;
        dealerTotal = 0;
        rollBtn.disabled = false;
        qtyDiceRolled = 0;
    })
    .Render();

  standBtn.disabled = true;

  const rollBtn: HTMLButtonElement = new btnBuilder()
    .Id('roll-btn')
    .Text('Roll')
    .Classes(['m-1', 'btn', 'btn-outline-primary'])
    .OnClick(async () => {
        rollBtn.disabled = true;
        standBtn.disabled = true;
        switch (qtyDiceRolled) {
          case 0:
            qtyDiceRolled = 3;
            playerTotal += await dice.Roll('3d6');
            dealerTotal += randomRoll(3);
            rollBtn.disabled = false;
            standBtn.disabled = false;
            break;
          case 3:
            qtyDiceRolled +=1;
            playerTotal += await dice.Roll('1d6');
            dealerTotal += randomRoll(1);
            rollBtn.disabled = false;
            standBtn.disabled = false;
            break;
          case 4:
            qtyDiceRolled +=1;
            playerTotal += await dice.Roll('1d6');
            dealerTotal += randomRoll(1);
            standBtn.disabled = false;
        }
    })
    .Render();
  board?.appendChild(rollBtn);
  board?.appendChild(standBtn);
}

function randomRoll(qty: number): number {
  let sum = 0;

  for (let i = 0; i < qty; i++) {
    sum += Math.floor(Math.random() * 6) + 1;
  }

  return sum;
}

