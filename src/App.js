import { useState } from 'react';
import Banner from './componentes/Banner';
import Descricao from './componentes/Descricao';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Draft Alfa',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Draft Beta',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Draft Gama',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Draft Teta',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    }
  ];

  const [cards, setCards] = useState([]);

  const aoAdicionarDraft = (card) => {
    console.log(card);
    setCards([...cards, card]);
  }

  return (
    <div className='App'>
      <Banner />
      <Descricao />
      <Formulario
       times={times.map(time => time.nome)} 
       aoDraftCadastrado={card => aoAdicionarDraft(card)} 
      />
      {times.map(time => <Time
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        cards={cards.filter(card => card.time === time.nome)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
