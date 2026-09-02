import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="thank-you-wrapper">
      
      {/* CABEÇALHO */}
      <header className="header-section">
        {/* Substitua o src abaixo pela imagem real do logo */}
        <img 
          src="../assets/images/logofeira.webp" 
          alt="Feira das Profissões" 
          className="logo-placeholder" 
        />
        <h2 className="header-title">Instituto Social Nossa Senhora de Fátima</h2>
      </header>

      {/* SEÇÃO PRINCIPAL (AZUL CLARO) */}
      <main className="hero-section">
        <h1 className="main-heading">
          Obrigado por fazer parte <br />
          <span className="highlight-yellow">desse momento!</span>
        </h1>
        
        <h3 className="sub-heading">Sejam sempre bem-vindos de volta ao Frei!</h3>
        
        <p className="text-paragraph">
          O Instituto Social Nossa Senhora de Fátima agradece pela sua presença na Feira de Profissões. Foi uma alegria compartilhar nossa história, projetos e propósito de <br className="hidden md:block"/>
          transformar vidas por meio da educação, qualificação profissional e cidadania. <br className="hidden md:block"/>
      
        </p>
        
      </main>

      {/* SEÇÃO DE CALL TO ACTION (BRANCA) */}
      <section className="cta-section">
        <p className="cta-text">
          Reveja e desfrute das atrações da informática que fizeram parte<br />
          desse momento especial.
        </p>
        <button 
          className="btn-yellow"
          onClick={() => console.log("Redirecionar para atrações")}
        >
          Rever as atrações da feira
        </button>
      </section>

      {/* RODAPÉ (AZUL ESCURO) */}
      <footer className="footer-section">
        <h2 className="footer-title">Muito obrigado pela sua presença!</h2>
        <p className="footer-text">Com carinho e gratidão,</p>
        <p className="footer-bold">Instituto Social Nossa Senhora de Fátima</p>
        <p className="footer-uppercase">
          Transformando vidas através da educação e cidadania.
        </p>
      </footer>

    </div>
  );
};

export default App;