import { Wrapper as diceWrapper } from './dice/Wrapper';
import { main } from './main/main';

// Injecting this wrapper at runtime because
// jest cannot parse the underlying module.
// I actually kind of like the idea of isolating 
// an untyped javascript module my test framework
// won't parse.

const dice: diceWrapper = new diceWrapper()

dice.id        = '#dice-box'
dice.assetPath = 'assets/';

// Launch main() when the page loads.
// Assumes you have <script></script>
// tags in your html.

window.onload = () => { main(dice) };
