import './Index.css'

import Header from '../../Components/Header/Index'
import Footer from '../../Components/Footer/Index'

const AboutPage = () => {
  return (
    <div className='AboutContainer'>
        <Header title='Sobre Mim' />
        <div className='About'>
          Meu nome é Vitor Saraiva, sou desenvolvedor de software. 
          Comecei a programar aos meus 14 anos de idade no ensino médio técnico e adoro a área de desenvolvimento e 
          de programação e já desenvolvi vários projetos pessoais com o intuito de desenvolver o meu aprendizado da 
          melhor maneira. Hoje eu sou desenvolvedor de software e assessor de projetos de automação na Serra Júnior 
          Engenharia, uma empresa júnior de desenvolvimento de projetos de automação, mecânicos e de software. 
          Atualmente fazendo Bacharelado em Engenharia da Computação pela Universidade Estadual do Rio de Janeiro 
          (UERJ)-IPRJ e Tecnólogo em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá. 
          Fiz Curso Técnico em Eletrônica e tenho amplos conhecimentos em solda de eletrônicos, manutenção de 
          computadores e sistemas de áudio, além de ter conhecimentos em redes de computadores.
          </div>
        <Footer />
    </div>
  );
};

export default AboutPage;