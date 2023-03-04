import { Builder } from './button';

describe('button', () => {
  it('should return an HTML button with classes, ID, and onclick', () => {
    let val: number = 0;

    const btn: HTMLButtonElement = new Builder()
      .Text('New Game')
      .Id('new-game-btn')
      .Classes(['test1', 'test2'])
      .OnClick(() => { val ++; })
      .Render();

    document.body.appendChild(btn);

    btn.click();

    const rendered: HTMLElement = document.getElementById('new-game-btn');
    expect(rendered.id).toMatch(/new-game-btn/);
    expect(rendered.className).toMatch(/test1 test2/);
    expect(rendered.innerText).toMatch(/New Game/);
    expect(val).toEqual(1);
  });
});
