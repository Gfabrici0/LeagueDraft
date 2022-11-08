import './Formulario.css';
import CampoSelecionar from '../CampoSelecionar';
import CampoTexto from '../CampoTexto';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

  const lanes = [
    'Top',
    'Jungle',
    'Mid',
    'Adc',
    'Suporte'
  ];

  const campeoes = [
    'Aatrox',
    'Ahri',
    'Akali',
    'Akshan',
    'Alistar',
    'Amumu',
    'Anivia',
    'Annie',
    'Aphelios',
    'Ashe',
    'Aurelion Sol',
    'Azir',
    'Bardo',
    "Bel'Veth",
    'Blitzcrank',
    'Brand',
    'Braum',
    'Caitlyn',
    'Camille',
    'Cassiopeia',
    "Cho'Gath",
    'Corki',
    'Darius',
    'Diana',
    'Dr. Mundo',
    'Draven',
    'Ekko',
    'Elise',
    'Evelynn',
    'Ezreal',
    'Fiddlesticks',
    'Fiora',
    'Fizz',
    'Galio',
    'Gangplank',
    'Garen',
    'Gnar',
    'Gragas',
    'Graves',
    'Gwen',
    'Hecarim',
    'Heimerdinger',
    'Illaoi',
    'Irelia',
    'Ivern',
    'Janna',
    'Jarvan IV',
    'Jax',
    'Jayce',
    'Jhin',
    'Jinx',
    "Kai'Sa",
    'Kalista',
    'Karma',
    'Karthus',
    'Kassadin',
    'Katarina',
    'Kayle',
    'Kayn',
    'Kennem',
    "Kha'Zix",
    'Kindred',
    'Kled',
    "Kog'Maw",
    'Leblanc',
    'Lee Sin',
    'Leona',
    'Lillia',
    'Lissandra',
    'Lucian',
    'Lulu',
    'Lux',
    'Malphite',
    'Malzahar',
    'Maokai',
    'Master Yi',
    'Miss Fortune',
    'Mordekaiser',
    'Morgana',
    'Nami',
    'Nasus',
    'Nautilus',
    'Neeko',
    'Nidalee',
    'Nilah',
    'Nocturne',
    'Nunu e Willump',
    'Olaf',
    'Orianna',
    'Ornn',
    'Pantheon',
    'Poppy',
    'Pyke',
    'Qiyana',
    'Quinn',
    'Rakan',
    'Rammus',
    "Rek'Sai",
    'Rell',
    'Renata Glas',
    'Renekton',
    'Rengar',
    'Riven',
    'Rumble',
    'Ryze',
    'Samira',
    'Sejuani',
    'Senna',
    'Seraphine',
    'Sett',
    'Shaco',
    'Shen',
    'Shyvana',
    'Singed',
    'Sion',
    'Sivir',
    'Skarner',
    'Sona',
    'Soraka',
    'Swain',
    'Sylas',
    'Syndra',
    'Tahm Kench',
    'Taliyah',
    'Talon',
    'Taric',
    'Teemo',
    'Thresh',
    'Tristana',
    'Trundle',
    'Tryndamere',
    'Twisted Fate',
    'Twitch',
    'Udyr',
    'Urgot',
    'Varus',
    'Vayne',
    'Veigar',
    "Vel'Koz",
    'Vex',
    'Vi',
    'Viego',
    'Viktor',
    'Vladimir',
    'Volibear',
    'Warwick',
    'Wokong',
    'Xayah',
    'Xerath',
    'Xin Zhao',
    'Yasuo',
    'Yone',
    'Yorick',
    'Yuumi',
    'Zac',
    'Zed',
    'Zeri',
    'Ziggs',
    'Zilean',
    'Zoe',
    'Zyra'
  ];
  
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('');
  const [campeao, setCampeao] = useState('');
  const [rota, setRota] = useState('');
  const [time, setTime] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoDraftCadastrado({
      campeao,
      rota,
      imagem,
      nome,
      time
    })
    setNome('');
    setCampeao('');
    setImagem('');
    setRota('');
    setTime('');
  };


  return (  
    <section className='formulario'>
      <img className='img-form' src="/imagens/thresh.png" alt="Imagem do campeão Thresh do jogo League of Legends" />
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do seu draft</h2>
        <CampoSelecionar
          obrigatorio={true} 
          itens={campeoes} 
          label="Campeão"
          valor={campeao}
          aoAlterar={valor => setCampeao(valor)}
        />
        <CampoSelecionar
          obrigatorio={true} 
          itens={lanes} 
          label="Lanes" 
          valor={rota}
          aoAlterar={valor => setRota(valor)}
        />
        <CampoTexto 
          obrigatorio={true} 
          label="Imagem" 
          placeholder="Digite o endereço de imagem" 
          valor={imagem}
          aoAlterar={valor => setImagem(valor)}
        />
        <CampoTexto 
          obrigatorio={true} 
          label="Jogador" 
          placeholder="Digite o nome do jogador" 
          valor={nome}
          aoAlterar={valor => setNome(valor)}
          />
          <CampoSelecionar
          obrigatorio={true} 
          itens={props.times} 
          label="Selecione o Draft" 
          valor={time}
          aoAlterar={valor => setTime(valor)}
        />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
}

export default Formulario;