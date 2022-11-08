import './Pick.css'

const Pick = ({ nome, campeao, rota, imagem, corDeFundo }) => {
  return (
    <div className='pick'>
      <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={ imagem } alt="Imagem do jogador" />
      </div>
      <div className='rodape'>
        <h4>{ nome }</h4>
        <h5>{ campeao }</h5>
        <h6>{ rota }</h6>
      </div>
    </div>
  );
};

export default Pick;