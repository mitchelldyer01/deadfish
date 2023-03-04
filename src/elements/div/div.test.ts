import { Builder } from './div';

describe('div', () => {
  it('should return an HTML div with an id', () => {
    const div: HTMLDivElement = new Builder().Id('new-div').Render();

    document.body.appendChild(div);

    expect(document.getElementById('new-div'));
  });
});
