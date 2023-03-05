import { Builder } from './div';

describe('div', () => {
  it('should return an HTML div with an id', () => {
    const div: HTMLDivElement = new Builder()
        .Id('new-div')
        .Classes(['container', 'column'])
        .Render();

    document.body.appendChild(div);

    const rendered: HTMLElement = document.getElementById('new-div');

    expect(rendered.id).toMatch(/new-div/);
    expect(rendered.className).toMatch(/container column/);
  });
});
