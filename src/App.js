import * as C from './app.styles';
import logoImage from './gatos/meowmoria20.png';
import { InfoItem } from './components/InfoItem';
import { Button } from './components/button';
import { useEffect, useState } from 'react';
import { items } from './data/items';
import { GridItem } from './components/GridItem';
import { formatTimeElapsed } from './helpers/formatTimeElapsed';

const App = () => {
  const [playing, setPlaying] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [shownCount, setShownCount] = useState(0);
  const [gridItems, setGridItems] = useState([]);

  useEffect (() => resetAndCreateGrid(), []);

  useEffect (() =>{
      const timer = setInterval(() => {
        if (playing) setTimeElapsed(timeElapsed + 1);
      }, 1000);
      return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  //VERIFICANDO ITENS CLICADOS
  useEffect(() => {
    if (shownCount === 2) {
      let opened = gridItems.filter(item => item.shown === true);
      if(opened.length === 2) {
       
        

        if(opened[0].item === opened[1].item) {
          let tempGrid = [...gridItems];
          for(let i in tempGrid) {
            if(tempGrid[i].shown) {
              tempGrid[i].permanentShown = true;
              tempGrid[i].shown = false;
            }
          }
        setGridItems(tempGrid);
        setShownCount(0);
          
        } else {
          setTimeout(() => {
            let tempGrid = [...gridItems];
          for (let i in tempGrid) {
            tempGrid[i].shown = false;
          }   
          setGridItems(tempGrid);
          setShownCount(0);  
          }, 1200);
             
        }
        
        setMoveCount(moveCount => moveCount +1);
      }
    }

  }, [shownCount, gridItems]);

  //VERIFICANDO FIM DE JOGO
  useEffect(() => {
    if(moveCount > 0 && gridItems.every(item => item.permanentShown === true)) {
      alert('Parabéns, você finalizou o jogo');
      setPlaying(false);
    }
  }, [moveCount, gridItems]);

  const resetAndCreateGrid = () => {
    //PASSO 1 - RESETAR
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);
    

    // PASSO 2 - CRIAR
    //GRIDVAZIO
    let tempGrid = [];
    for (let i = 0; i < (items.length * 2); i++) tempGrid.push({ item: null, shown: false, permanentShown: false });

    //PREENCHER
    for (let w = 0; w < 2; w++) {
      for(let i = 0; i < items.length; i++) {
        
        let pos= -1;
        while(pos < 0 || tempGrid[pos].item !== null) {
          pos = Math.floor(Math.random () * (items.length * 2));
        }
        tempGrid[pos].item = i;
      }
    }

    //LEVAR PRO STATE

    setGridItems(tempGrid);
   
    // PASSO3 - COMEÇAR
   
    setPlaying(true);


  }

  const handleItemClick = (index) => {
    if ( playing && index !== null  && shownCount < 2 ) {
      let tempGrid =[...gridItems];

      if(tempGrid[index].permanentShown === false && tempGrid[index].shown === false ){
        tempGrid[index].shown = true;
        setShownCount(shownCount + 1);

      }

      setGridItems(tempGrid);

    }


  }

  return (
    <C.Cointainer>
      <C.Info>
      <C.NomeJogo href="">
        <img src={logoImage} width="180" alt="JOGO DA MEOWMÓRIA" />
      </C.NomeJogo>

      <C.InfoArea>
        <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
        <InfoItem label="Movimentos" value={moveCount.toString()} />
      </C.InfoArea>

      <Button label="Jogar" onClick={resetAndCreateGrid} />
    
      </C.Info>  
      <C.GridArea>
       <C.Grid>
        {gridItems.map((item, index)=>(
          <GridItem
          key={index}
          item={item}
          onClick={() => handleItemClick(index)}
          />
        ))}
       </C.Grid>
      </C.GridArea>
    
    </C.Cointainer>
  );
}

export default App;