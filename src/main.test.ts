import { main } from './main';

describe('main', () => {
  beforeEach(() => {
    document.body = document.createElement('body');
  });

  it('main() should add a paragraph and buttons to the body', () => {
    main();
    expect(document.body.querySelector('p').textContent).toMatch(/Hello, World/);
    expect(document.getElementById('new-game').innerText).toMatch(/New Game/);
  });

});
