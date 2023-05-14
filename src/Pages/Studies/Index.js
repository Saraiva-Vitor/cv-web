import { Card, Row, Col } from 'antd';
import etrr from '../../Assets/etrr.png'
import unesa from '../../Assets/estacio.png'
import uerj from '../../Assets/uerj.png'

import './Index.css'

import Header from '../../Components/Header/Index'
import Footer from '../../Components/Footer/Index'

const StudiesPage = () => {
  return (
    <div className='StudiesContainer'>
        <Header title='Formação' />
        <Cards />
        <Footer />
    </div>
  );
};

function Cards() {
  return (
    <div className='StudiesCardsContainer'>
        <div className='StudiesSection'>
          <div className='CardStyle' title={<h3 style={{color: 'white'}}>2022 -- Atualmente</h3>}>
            <Col>
              <img className='StudiesImg' src= {unesa} alt= 'unesa' />
              <Col>
                <h4 className='Andamento'>2022 - Atualmente</h4>
                <h4 className='Curso'>Análise e Desenvolvimento de Sistemas</h4>
                <h4 className='Universidade'>Universidade Estácio de Sá</h4>
                <h4>Tecnólogo</h4>
              </Col>
            </Col>
          </div>
          <div className='CardStyle' title={<h3 style={{color: 'white'}}>2022 -- Atualmente</h3>}>
            <Col>
              <img className='StudiesImg' src= {uerj} alt= 'uerj' />
              <Col>
                <h4 className='Andamento'>2018 -- Atualmente</h4>
                <h4 className='Curso'>Engenharia da Computação</h4>
                <h4 className='Universidade'>Universidade do Estado do Rio de Janeiro</h4>
                <h4>Bacharel</h4>
              </Col>
            </Col>
          </div>
          <div className='CardStyle' title={<h3 style={{color: 'white'}}>2022 -- Atualmente</h3>}>
            <Col>
              <img className='StudiesImg' src= {etrr} alt= 'etrr' />
              <Col>
                <h4 className='Andamento'>2014 -- 2016</h4>
                <h4 className='Curso'>Eletrônica</h4>
                <h4 className='Universidade'>Escola Técnica Rezende-Rammel</h4>
                <h4>Técnico</h4>
              </Col>
            </Col>
          </div>
        </div>
      </div>
  );
};

export default StudiesPage;