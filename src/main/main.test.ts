import { main } from './main';
import { MockWrapper as diceWrapper } from '../dice/MockWrapper';

describe('main', () => {
  beforeEach(() => {
    document.body = document.createElement('body');
  });

  it('main() should add a header and buttons to the body', () => {
    const dice: diceWrapper = new diceWrapper();
    main(dice);
    expect(document.body.querySelector('h1').textContent).toMatch(/deadfish/);
    expect(document.getElementById('roll-btn').innerText).toMatch(/Roll/);
    expect(document.getElementById('stand-btn').innerText).toMatch(/Stand/);
  });

});
