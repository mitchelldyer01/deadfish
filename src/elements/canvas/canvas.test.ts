import { Builder } from './canvas';

describe('canvas', () => {
  it('should return an HTML canvas with an id', () => {
    const canvas: HTMLCanvasElement = new Builder().Id('new-canvas').Render();

    document.body.appendChild(canvas);

    expect(document.getElementById('new-canvas'));
  });
});
