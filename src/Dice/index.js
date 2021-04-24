import './style.css'

const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

export const Dice = ({ side }) => {
  const diceElm = document.createElement('div')
  diceElm.classList.add('dice')

  //div element, který zobrazuje stranu kostky s číslem; číslo je určené třídou dice__side--X
  const sideElm = document.createElement('div')
  sideElm.classList.add('dice__side', `dice__side--${side}`)
  diceElm.appendChild(sideElm)

  //tlačítko „hodit“
  const buttonElm = document.createElement('button')
  buttonElm.classList.add('btn', 'btn--small', 'roll-btn')
  buttonElm.textContent = 'hodit'
  buttonElm.addEventListener('click', () => {
    //každá pořádná stránka musí mít animace, takže si trochu vylepšíme zadání a při hození kostkou nastavíme třídu dice--roll, která kostku mírně zmenší…
    sideElm.classList.add('dice--roll');
    setTimeout(() => {
      //… a po 300 ms třídu zase odstraníme, takže se kostka vrátí zpět a pokračujeme změnou čísla
      sideElm.classList.remove('dice--roll');
      
      //vracíme se zpět k původnímu zadání
      //vymazat všechny třídy dice__side--X – kostka zůstane prázdná…
      for (let i = 1; i <= 6; i++) {
        sideElm.classList.remove(`dice__side--${i}`)
      }
      //… a nastavit novou třídu dice__side--X podle hozeného čísla – výsledek volání roll()
      sideElm.classList.add(`dice__side--${roll()}`)
    }, 300)
  })

  diceElm.appendChild(buttonElm)

  return diceElm
}
