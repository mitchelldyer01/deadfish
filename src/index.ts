export function index() {
  const body = document.body;
  const p    = document.createElement('p');

  p.textContent = 'Hello, World';
  body?.appendChild(p);
}
