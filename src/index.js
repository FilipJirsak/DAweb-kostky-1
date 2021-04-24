import './style.css';
//budeme popužívat komponentu Dice nadefinovanou v souboru Dice/index.js (index.js se může vynechat)
import { Dice } from './Dice'

const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const diceRowElm = document.querySelector('#dice-row');
// Na stránku vložím 10 kostek
for (let i = 0; i < 10; i++) {
  diceRowElm.appendChild(Dice({ side: roll() }))
}
