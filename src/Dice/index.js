import './style.css'

const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

export const Dice = ({ side }) => {
  const diceElm = document.createElement('div')
  diceElm.classList.add('dice')

  const sideElm = document.createElement('div')
  sideElm.classList.add('dice__side', `dice__side--${side}`)
  diceElm.appendChild(sideElm)

  const buttonElm = document.createElement('button')
  buttonElm.classList.add('btn', 'btn--small', 'roll-btn')
  buttonElm.textContent = 'hodit'
  buttonElm.addEventListener('click', () => {
    sideElm.classList.add('dice--roll');
    setTimeout(() => {
      sideElm.classList.remove('dice--roll');
      for (let i = 1; i <= 6; i++) {
        sideElm.classList.remove(`dice__side--${i}`)
      }
      sideElm.classList.add(`dice__side--${roll()}`)
    }, 300)
  })

  diceElm.appendChild(buttonElm)

  return diceElm
}
