import  './CampoSelecionar.css'

const CampoSelecionar = (props) => {
  return(
    <div className='campo-selecionar'>
        <label>{ props.label }</label>
        <select 
          onChange={evento => props.aoAlterar(evento.target.value)} 
          required={props.required} 
          value={props.valor} 
        >
          <option value=""></option>
          {props.itens.map(item => <option key={item} >{ item }</option>)}
        </select>
    </div>
  );
}

export default CampoSelecionar;