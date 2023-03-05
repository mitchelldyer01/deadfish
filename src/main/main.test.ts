import { main } from './main';
import { MockWrapper as diceWrapper } from '../dice/MockWrapper';

describe('main', () => {
  beforeEach(() => {
    document.body = document.createElement('body');
  });

  it('main() should add a paragraph and buttons to the body', () => {
    const dice: diceWrapper = new diceWrapper();
    main(dice);
    expect(document.body.querySelector('p').textContent).toMatch(/Hello, World/);
    expect(document.getElementById('roll-btn').innerText).toMatch(/Roll/);
  });

});
