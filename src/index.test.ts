import { index } from './index';

describe('index', () => {

  it('should add a paragraph and buttons to the body', () => {
    const body    = document.createElement('body');
    document.body = body;

    index();

    expect(body.querySelector('p').textContent).toMatch(/Hello, World/);
  });

});
