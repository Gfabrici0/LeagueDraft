import './Rodape.css'

const Rodape = () => {
  return (
    <footer className='footer'>
      <div className='div-link'>
        <a href="https://www.instagram.com/gafabrici0/"><img className='icone-footer' src='/imagens/instagram.svg' alt="Imagem de link do instagram" />Instagram</a>
        <a href="https://github.com/Gfabrici0"><img className='icone-footer' src='/imagens/github.svg' alt="Imagem de link do github" />GitHub</a>
        <a href="https://www.linkedin.com/in/gfabrici0/"><img className='icone-footer' src='/imagens/linkedin.svg' alt="Imagem de link do linkedin" />Linkedin</a>
      </div>
      <div className='div-escrita'>
        <p>
        Desenvolvido por <i>Gabriel Fabricio</i>, baseado em um projeto da alura
        </p>
      </div>
    </footer>
  );
};

export default Rodape;