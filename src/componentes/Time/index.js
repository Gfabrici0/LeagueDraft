import Pick from '../Pick';
import './Time.css'

const Time = (props) => {
  return(
    (props.cards.length > 0) ? <section className='time'>
      <div className='div-cor-time' style={ { backgroundColor: props.corSecundaria }}>
        <h3 style={{ borderColor: props.corPrimaria }}>{ props.nome }</h3>
        <div className='drafts'>
          {props.cards.map( card => <Pick corDeFundo={props.corPrimaria} key={card.nome} nome={card.nome} campeao={card.campeao} rota={card.rota} imagem={card.imagem} />)}
        </div>
      </div>
    </section>
    : ''
  );
};

export default Time;