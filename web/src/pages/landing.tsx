import React from 'react';
import {Link} from 'react-router-dom'; // IMPORTAR CARINHA PARA MUDAR DE PÁGINA SEM RECARREGAR TUDO HEHEHE

import '../styles/pages/landing.css';
import { FiArrowRight } from 'react-icons/fi'

import logoImg from '../images/logo.png';

function Landing(){

    return (
        <div id="page-landing">
      <div className="content-wrapper">
          <img src={logoImg} alt="Happy"/>
          <main>
            <h1>Leve a felicidade para o mundo</h1>
            <p>Visite um orfanato e seja feliz!</p>
          </main>

          <div className="location">
            <strong>Miracema do Tocantins</strong>
            <span>Tocantins</span>
          </div>

          <Link to="/app" className="enter-app">
            < FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"  />
          </Link>
      </div>
    </div>
    );

}

export default Landing;
