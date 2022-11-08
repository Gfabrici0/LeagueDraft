import './Banner.css'

export const Banner = () => {
  return (
    <header className='banner'>
      <div className='banner-div'>
        <h1>LeagueDraft</h1>
        <nav className='banner-nav'>
          <a href="google.com">Inicio</a>
          <a href="google.com">Fazer Draft</a>
          <a href="google.com">Cards</a>
        </nav>
      </div>
    </header>
  );
}